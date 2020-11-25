/* eslint-disable react/style-prop-object */
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { cacheAssetsAsync } from './src/app/helpers/AssetsHandling';
import { Fonts, Images } from './src/app/constants/Assets';

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
		<View style={styles.container}>
			<Text>Open up App.js to start working on your app!</Text>
			<StatusBar style="auto" />
		</View>
	);
}
