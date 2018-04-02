import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import MapMarkerItem from '../components/MapMarkerItem';
import MapView from 'react-native-maps';

let {width, height} = Dimensions.get('window');

class MapScreen extends Component { 

	render() {
    const {earthquakes} = this.props.screenProps.earthquakes;  

		return (
			<View style={styles.container}>
  			<MapView 
          style={styles.map} 
          provider={"google"}
          initialRegion={{ 
            latitude: 0,
            longitude: 0,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>

          {earthquakes.map((item, i) => {
            return <MapMarkerItem earthquake={item} key={i} visitLink={this.visitLinkUrl} />
          })}
        </MapView>
      </View>
		); 
	}
}

export default MapScreen;

const styles = StyleSheet.create({  
	container: {
		flex: 1
	},
	map: {
    marginTop: 20,
    height: height-68,
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
    height: 20,
    width: 20,
    borderWidth: 3,
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