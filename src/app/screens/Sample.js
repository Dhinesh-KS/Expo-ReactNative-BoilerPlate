import React, { useState, useEffect, useContext } from 'react';
import { View, Button, ActivityIndicator, StyleSheet, Text } from 'react-native';
import { HttpClient } from '../services/http-client/Provider';
import AuthContext from '../navigation/AuthContext';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});

const Sample = () => {
	const [isLoading, setIsLoading] = useState(false);

	const { signOut } = useContext(AuthContext);

	const getData = () => {
		setIsLoading(true);
		HttpClient.getUsers()
			.then(res => {
				console.log(res.data);
			})
			.catch(error => {
				console.log(error);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const postData = () => {
		setIsLoading(true);
		const data = {
			title: 'foo',
			body: 'bar',
			userId: 1
		};
		HttpClient.postUser(data)
			.then(res => {
				console.log(res.status);
			})
			.catch(error => {
				console.log(error);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const editData = () => {
		setIsLoading(true);
		const data = {
			id: 1,
			title: 'foo',
			body: 'bar',
			userId: 1
		};
		const id = 1;
		HttpClient.editUser(id, data)
			.then(res => {
				console.log(res.status);
			})
			.catch(error => {
				console.log(error);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	useEffect(() => {
		getData();
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
			<Button title="Get" onPress={getData} />
			<Button title="Post" onPress={postData} />
			<Button title="Edit" onPress={editData} />
			<Text>Check the console</Text>
			<Button title="SignOut" onPress={() => signOut()} />
		</View>
	);
};

export default Sample;
