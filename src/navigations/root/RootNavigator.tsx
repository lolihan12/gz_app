import React from 'react';
import MainDrawerNavigator from '../drawer/MainDrawerNavigator';
import AuthStackNavigator from '../AuthStackNavigator';

const RootNavigator = () => {
	const isLoggedIn = true;

	return (
		<>
			{
				isLoggedIn ? <MainDrawerNavigator/> : <AuthStackNavigator/>
			}
		</>
	);
};

export default RootNavigator;