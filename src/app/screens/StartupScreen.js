import React, { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { setDidTryAL, authenticate } from '../redux/index';
import { DeviceStorage } from '../utilities/AsyncStorage';

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

const StartupScreen = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const tryLogin = async () => {
			const userData = await DeviceStorage.getToken('userData');
			if (!userData) {
				dispatch(setDidTryAL());
				return;
			}
			const transformedData = JSON.parse(userData);
			const { token, userId } = transformedData;

			dispatch(authenticate(userId, token));
		};

		tryLogin();
	}, [dispatch]);

	return (
		<View style={styles.screen}>
			<ActivityIndicator size="large" color="blue" />
		</View>
	);
};

export default StartupScreen;
