import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import moment from 'moment';
import SmallMap from './SmallMap.js'; 

const MapWidget = ({caption, earthquake}) => {
	const currentTime = moment().format('h:mma, Do MMMM YYYY');
	const magnitude = earthquake.properties.mag;
	const description = earthquake.properties.place;
	const timestamp = earthquake.properties.time;
	const formattedtime = moment.unix(+timestamp/1000).format("h:mma, DD MMM YYYY");
	const depth = earthquake.geometry.coordinates[2];

	return (
		<View style={styles.container}>
			<View style={styles.headerInfo}>
				<Text style={styles.caption}>{caption}</Text>
				<Text style={styles.details}>{magnitude}M - {description}</Text>
				<Text style={styles.details}>{formattedtime}, depth: {depth}km</Text>
			</View>

			<SmallMap earthquake={earthquake} />
		</View>
	)
};

export default MapWidget;

const styles = StyleSheet.create({  
	container: {
		marginVertical: 10
	},
	headerInfo: {
		marginHorizontal: 10
	},
	caption: {
		fontSize: 18,
		fontWeight: 'bold'
	},
	details: {
		fontSize: 14
	}
});
