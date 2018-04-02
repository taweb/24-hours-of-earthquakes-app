import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { TabNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen.js';
import MapScreen from './MapScreen.js';
import Loading from '../components/Loading';

const RootNavigator = TabNavigator({
	Home: { screen: HomeScreen },
	Map: { screen: MapScreen }
}, { 
	tabBarPosition: 'bottom', 
 	activeTintColor: '#1abc9c'
});

class MainNavigation extends Component {
	constructor(props) { 
		super(props);
	} 

	componentDidMount() {
		this.props.onLoad();
	}

	render() {
		const {earthquakes, loading, onLoad } = this.props;
		if (loading) {
      		return <Loading />; 
    	}
		return <RootNavigator screenProps={{ earthquakes: {earthquakes}, onLoad: {onLoad} }}/>
	}
}

export default MainNavigation;

StatusBar.setBarStyle('dark-content');
