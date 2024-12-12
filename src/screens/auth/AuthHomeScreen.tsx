import React from 'react';
import { Button, requireNativeComponent, SafeAreaView, StyleSheet, View } from 'react-native';
import { AuthStackParamList } from '../../navigations/AuthStackNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import {authNavigations} from '../../constants/navigations'

type  AuthHomeScreenProps = StackScreenProps<AuthStackParamList, typeof authNavigations.AUTH_HOME>

const AuthHomeScreen = ({navigation} :AuthHomeScreenProps) => {
	return (
		<SafeAreaView>
			<View>
				<Button title="로그인으로" onPress={(()=>navigation.navigate(authNavigations.LOGIN))}/>
				<Button title="회원가입으로" onPress={(()=>navigation.navigate(authNavigations.SIGNUP))}/>
			</View>
		</SafeAreaView>
	);
};

export default AuthHomeScreen;
