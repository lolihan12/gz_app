import React from 'react';
import { Text, View } from 'react-native';
import HomeChart from '../../components/chart/HomeChart';

const HomeScreen = ({navigation} :any) => {
	return (
		<View>
			<HomeChart/>
			{/* <Text>  onPress={(()=>navigation.navigate('AuthHome'))} */}
				{/* 메인 홈 */}
			{/* </Text> */}
		</View>
	);
};

export default HomeScreen;