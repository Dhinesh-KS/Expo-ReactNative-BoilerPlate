/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
import {
	Ionicons,
	Foundation,
	FontAwesome,
	MaterialIcons,
	MaterialCommunityIcons
} from '@expo/vector-icons';

const Fonts = [
	{ Poppins_Regular: require('../assets/fonts/Poppins-Regular.ttf') },
	{ Poppins_Bold: require('../assets/fonts/Poppins-Bold.ttf') },
	{ Roboto_Regular: require('../assets/fonts/Roboto-Regular.ttf') },
	{ Roboto_Medium: require('../assets/fonts/Roboto-Medium.ttf') },
	Ionicons.font,
	Foundation.font,
	FontAwesome.font,
	MaterialIcons.font,
	MaterialCommunityIcons.font
];

const Images = [require('../assets/images/foodRestaurant.png')];

export { Fonts, Images };
