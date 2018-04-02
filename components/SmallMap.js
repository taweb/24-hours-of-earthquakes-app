import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

let {width} = Dimensions.get('window');

const SmallMap = ({earthquake}) => {

	const latitude = earthquake.geometry.coordinates[1];
	const longitude = earthquake.geometry.coordinates[0];
	const depth = earthquake.geometry.coordinates[2];

	return (
		<MapView 
      style={styles.map} 
      provider={"google"}
      initialRegion={{ 
        latitude: latitude, 
        longitude: longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421, 
      }}>
      <MapView.Marker
        coordinate={{
          latitude: latitude,
          longitude: longitude,
        }}>
        <View style={styles.radius}>
          <View style={styles.marker} />
        </View> 
        <MapView.Callout>
          <View style={styles.callout}>
            <Text style={styles.calloutTitle}>Event Geometry</Text>
            <Text style={styles.calloutBody}>Coordinates: {latitude}°N, {longitude}°W</Text>
            <Text style={styles.calloutBody}>Depth: {depth}km</Text>
          </View>
        </MapView.Callout>
      </MapView.Marker> 
    </MapView>
	)
};

export default SmallMap;

const styles = StyleSheet.create({  
	map: {
    height: 120,
    width: width,
  },
  radius: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 0, 0, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(255, 0, 0, 0.3)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  marker: {
    height: 15,
    width: 15,
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 20 / 2,
    overflow: 'hidden',
    backgroundColor: '#C00B0B',
  },
  callout: {
    width: 200,
  },
  calloutTitle: { 
  	fontSize: 14
  },
  calloutBody: {
  	fontSize: 12
  }
});