import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartupScreen from '../screens/StartupScreen';
import Sample from '../screens/Sample';
import AuthScreen from '../screens/AuthScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Auth" component={AuthScreen} />
		</Stack.Navigator>
	);
};

const AppNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Sample" component={Sample} />
		</Stack.Navigator>
	);
};

const RootNavigator = () => {
	const isAuth = useSelector(state => !!state.auth.token);
	const didTryAutoLogin = useSelector(state => state.auth.didTryAutoLogin);
	return (
		<NavigationContainer>
			{isAuth && <AppNavigator />}
			{!isAuth && didTryAutoLogin && <AuthNavigator />}
			{!isAuth && !didTryAutoLogin && <StartupScreen />}
		</NavigationContainer>
	);
};

export default RootNavigator;
