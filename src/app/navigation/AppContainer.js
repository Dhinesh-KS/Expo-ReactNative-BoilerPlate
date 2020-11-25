/* eslint-disable consistent-return */
/* eslint-disable default-case */
import React, { useEffect, useReducer, useMemo } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Root } from 'native-base';
import { ActivityIndicator, View } from 'react-native';
import { navigationRef } from './RootNavigation';
import { AuthProvider } from './AuthContext';
import { DeviceStorage } from '../utilities/AsyncStorage';
import Sample from '../screens/Sample';
import AuthScreen from '../screens/AuthScreen';

const Stack = createStackNavigator();

const AppContainer = () => {
	const initialAuthState = {
		isLoading: true,
		isSignout: false,
		userToken: null
	};

	const authReducer = (prevState, action) => {
		switch (action.type) {
			case 'RETRIEVE_TOKEN':
				return {
					...prevState,
					isLoading: false,
					userToken: action.token
				};
			case 'LOGIN':
				return {
					...prevState,
					isSignout: false,
					isLoading: false,
					userToken: action.token
				};
			case 'LOGOUT':
				return {
					...prevState,
					isSignout: true,
					isLoading: false,
					userToken: null
				};
		}
	};

	const [authState, dispatch] = useReducer(authReducer, initialAuthState);

	useEffect(() => {
		const retrieveToken = async () => {
			let userToken;
			try {
				userToken = await DeviceStorage.getToken('token');
			} catch (error) {
				console.log('Token Error: ', error);
			}
			dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
		};
		setTimeout(() => {
			retrieveToken();
		}, 500);
	}, []);

	const authContext = useMemo(
		() => ({
			signIn: () => {
				dispatch({ type: 'LOGIN', token: 'userToken' });
			},
			signOut: async () => {
				try {
					await DeviceStorage.removeToken('token');
				} catch (error) {
					console.log('Token Error: ', error);
				}
				dispatch({ type: 'LOGOUT' });
			}
		}),
		[]
	);

	if (authState.isLoading) {
		return (
			<View>
				<ActivityIndicator size="large" color="red" />
			</View>
		);
	}

	return (
		<Root>
			<AuthProvider value={authContext}>
				<SafeAreaProvider>
					<NavigationContainer ref={navigationRef}>
						{authState.userToken != null ? (
							<>
								<Stack.Navigator screenOptions={{ headerShown: false }}>
									<Stack.Screen name="Sample" component={Sample} />
								</Stack.Navigator>
							</>
						) : (
							<>
								<Stack.Navigator screenOptions={{ headerShown: false }}>
									<Stack.Screen name="AuthScreen" component={AuthScreen} />
								</Stack.Navigator>
							</>
						)}
					</NavigationContainer>
				</SafeAreaProvider>
			</AuthProvider>
		</Root>
	);
};

export default AppContainer;
