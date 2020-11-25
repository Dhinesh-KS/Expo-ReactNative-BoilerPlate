import AsyncStorage from '@react-native-async-storage/async-storage';

export const DeviceStorage = {
	setToken: async (key, value) => {
		try {
			await AsyncStorage.setItem(key, value);
		} catch (error) {
			console.log('AsyncStorage Error: ', error.message);
		}
	},
	removeToken: async key => {
		try {
			await AsyncStorage.removeItem(key);
		} catch (error) {
			console.log('AsyncStorage Error: ', error.message);
		}
	},
	getToken: async key => {
		let resp = null;
		try {
			resp = await AsyncStorage.getItem(key);
		} catch (error) {
			console.log('AsyncStorage Error: ', error.message);
		}
		return resp;
	}
};
