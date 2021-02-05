import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AlbumsListScreen from './src/screens/AlbumsListScreen';

const navigator = createStackNavigator(
	{
		Albums: AlbumsListScreen
	},
	{
		initialRouteName: 'Albums'
	}
);

export default createAppContainer(navigator);
