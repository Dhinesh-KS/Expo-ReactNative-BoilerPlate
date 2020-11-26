/* eslint-disable react/style-prop-object */
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { cacheAssetsAsync } from './src/app/helpers/AssetsHandling';
import { Fonts, Images } from './src/app/constants/Assets';
import AppNavigator from './src/app/navigation/AppNavigator';
import Store from './src/app/redux/Store';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export default function App() {
	const [isLoading, setIsLoading] = useState(true);

	const loadAssets = async () => {
		try {
			await cacheAssetsAsync({ images: Images, fonts: Fonts });
		} catch (error) {
			console.log(error, 'error');
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		loadAssets();
	}, []);

	if (isLoading) {
		return (
			<View style={styles.container}>
				<ActivityIndicator size="small" color="red" />
			</View>
		);
	}

	return (
		<Provider store={Store}>
			<AppNavigator />
		</Provider>
	);
}
