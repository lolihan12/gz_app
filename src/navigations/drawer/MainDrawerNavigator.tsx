import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import HomeScreen from '../../screens/home/HomeScreen';
import FeedHomeScreen from '../../screens/feed/FeedHomeScreen';
import CalendarHomeScreen from '../../screens/calendar/CalendarHomeScreen';

const Drawer :any = createDrawerNavigator()
const MainDrawerNavigator = () => {
	return (
		<Drawer.Navigator>
			<Drawer.Screen name="Home" component={HomeScreen} />
			<Drawer.Screen name="Test" component={FeedHomeScreen} />
			<Drawer.Screen name="CalendarHome" component={CalendarHomeScreen} />
		</Drawer.Navigator>
	);
};

export default MainDrawerNavigator;