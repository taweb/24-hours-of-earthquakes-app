import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import MapView from 'react-native-maps';
import moment from 'moment';
import { WebBrowser} from 'expo';
 
class MapMarkerItem extends Component { 

  constructor(props){
    super(props);
  }

  render() {
    const {earthquake} = this.props;
    const latitude = earthquake.geometry.coordinates[1];
    const longitude = earthquake.geometry.coordinates[0];
    const depth = earthquake.geometry.coordinates[2];
    const magnitude = earthquake.properties.mag;
    const description = earthquake.properties.place;
    const timestamp = earthquake.properties.time;
    const formattedtime = moment.unix(+timestamp/1000).format("h:mma, DD MMM YYYY");
    const url = earthquake.properties.url;
    const markerStyle = (magnitude >= 5 ? styles.largeRadius : (magnitude < 2 ? styles.smallRadius : styles.mediumRadius))

  	return (
      <MapView.Marker
        coordinate={{
          latitude: latitude,
          longitude: longitude,
        }}>
        <View style={[styles.radius, markerStyle]}>
          <View style={styles.marker} />  
        </View> 

        <MapView.Callout>
          <View style={styles.callout}>
            <Text style={styles.calloutTitle}>{magnitude}M - {description}</Text>
            <Text style={styles.calloutBody}>Time:{formattedtime}</Text>
            <Text style={styles.calloutBody}>Coordinates: {latitude}°N, {longitude}°W</Text>
            <Text style={styles.calloutBody}>Depth: {depth}km</Text>
          </View>
        </MapView.Callout>
      </MapView.Marker>       
  	)
  };

}

export default MapMarkerItem;

const styles = StyleSheet.create({  
  radius: {
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 0, 0, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(255, 0, 0, 0.3)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  marker: {
    height: 5,
    width: 5,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 20 / 2, 
    overflow: 'hidden',
    backgroundColor: '#C00B0B',
  },
  largeRadius: { // for magnitude > 5
    height: 75,
    width: 75,
    borderRadius: 75 / 2, 
  },
  mediumRadius: { // for magnitude > 2 < 5
    height: 30,
    width: 30, 
    borderRadius: 30 / 2,
  },
  smallRadius: { // for magnitude < 2
    height: 15,
    width: 15,
    borderRadius: 15 / 2,
  },
  callout: {
    width: 200,
  },
  calloutTitle: { 
  	fontSize: 14
  },
  calloutBody: {
  	fontSize: 12
  },
});