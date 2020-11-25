import React, { useState, useContext } from 'react';
import { TextInput, View, Button } from 'react-native';
import { DeviceStorage } from '../utilities/AsyncStorage';
import AuthContext from '../navigation/AuthContext';

const AuthScreen = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const { signIn } = useContext(AuthContext);

	const handleSignIn = () => {
		if (username && password) {
			DeviceStorage.setToken('token', 'true');
			signIn();
		}
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
