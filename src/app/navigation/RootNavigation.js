import * as React from 'react';

export const navigationRef = React.createRef();

export function navigate(name, params) {
	return navigationRef.current?.navigate(name, params);
}

export function back() {
	return navigationRef.current?.goBack();
}
