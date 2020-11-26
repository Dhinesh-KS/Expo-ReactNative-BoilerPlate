import React, { useState } from 'react';
import { TextInput, View, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { handleSignUp } from '../redux/index';

const AuthScreen = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();

	const handleSignIn = async () => {
		await dispatch(handleSignUp(username, password));
	};

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<TextInput
				placeholder="Username"
				value={username}
				onChangeText={setUsername}
				style={{ width: '80%', height: 40, borderWidth: 1, borderColor: '#000' }}
			/>
			<TextInput
				placeholder="Password"
				value={password}
				onChangeText={setPassword}
				secureTextEntry
				style={{ width: '80%', height: 40, borderWidth: 1, borderColor: '#000' }}
			/>
			<Button title="Sign in" onPress={() => handleSignIn()} />
		</View>
	);
};
export default AuthScreen;
