/* eslint-disable import/prefer-default-export */
/* eslint-disable no-else-return */
import { Image } from 'react-native';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';

const handleImageCaching = images => {
	return images.map(image => {
		if (typeof image === 'string') {
			return Image.prefetch(image);
		} else {
			return Asset.fromModule(image).downloadAsync();
		}
	});
};

const cacheFonts = fonts => {
	return fonts.map(font => Font.loadAsync(font));
};

const cacheAssetsAsync = ({ images = [], fonts = [] }) => {
	return Promise.all([...handleImageCaching(images), ...cacheFonts(fonts)]);
};

export { cacheAssetsAsync };
