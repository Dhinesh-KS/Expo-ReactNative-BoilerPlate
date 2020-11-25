import { Toast } from 'native-base';

export const toastr = {
	showToast: (message, type, duration = 2500) => {
		Toast.show({
			text: message,
			duration,
			position: 'bottom',
			textStyle: { fontFamily: 'Poppins_Regular', fontSize: 16 },
			buttonText: 'Close',
			buttonTextStyle: {
				fontFamily: 'Poppins_Regular',
				fontSize: 16,
				textTransform: 'capitalize'
			},
			type
		});
	}
};
