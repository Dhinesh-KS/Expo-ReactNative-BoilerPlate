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
	{ PoppinsRegular: require('../assets/fonts/Poppins-Regular.ttf') },
	{ PoppinsBold: require('../assets/fonts/Poppins-Bold.ttf') },
	{ RobotoRegular: require('../assets/fonts/Roboto-Regular.ttf') },
	{ RobotoMedium: require('../assets/fonts/Roboto-Medium.ttf') },
	{ OpenSansRegular: require('../assets/fonts/OpenSans-Regular.ttf') },
	{ OpenSansBold: require('../assets/fonts/OpenSans-Bold.ttf') },
	{ MontserratRegular: require('../assets/fonts/Montserrat-Regular.ttf') },
	{ MontserratBold: require('../assets/fonts/Montserrat-Bold.ttf') },
	Ionicons.font,
	Foundation.font,
	FontAwesome.font,
	MaterialIcons.font,
	MaterialCommunityIcons.font
];

const Images = [require('../assets/images/foodRestaurant.png')];

export { Fonts, Images };
