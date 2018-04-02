import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import moment from 'moment';
import MapWidget from '../components/MapWidget';
import { WebBrowser} from 'expo';

class HomeScreen extends Component {  
  constructor(props) { 
    super(props);
  } 

  openApiUrl() {
      const Url = 'https://earthquake.usgs.gov/fdsnws/event/1/';
      WebBrowser.openBrowserAsync(Url);
  }

  render() { 
    const {earthquakes} = this.props.screenProps.earthquakes;

    const totalEarthquakes = earthquakes.length;
    const currentTimeLocal = moment().format('h:mma, Do MMMM YYYY');

    const largestEarthquake = earthquakes.reduce((acc, current) => (current.properties.mag > acc.properties.mag ? current : acc ));
    const mostRecentEarthquake = earthquakes.reduce((acc, current) => (current.properties.time > acc.properties.time ? current : acc ));
  
      return (
        <View style={styles.container}>

          <Text style={styles.header}>24 Hours of Earthquakes</Text>
          <Text style={styles.subheader}>{totalEarthquakes}: Earthquakes in last 24 hours.</Text>

          <MapWidget
            caption={"Largest Earthquake"} 
            earthquake={largestEarthquake} 
          />
 
          <MapWidget 
            caption={"Most Recent Earthquake"}
            earthquake={mostRecentEarthquake}
          />

          <Text style={styles.credit}>The data used in this app comes via requests to the USGS Earthquake Catalog API. Follow the link below for more info:</Text>
          <Text style={styles.link} onPress={this.openApiUrl}>https://earthquake.usgs.gov/fdsnws/event/1/</Text>

          <Text style={styles.footer}>Updated as of: {currentTimeLocal}</Text>
          
        </View>
      );
  }
}

HomeScreen.navigationOptions = {
  title: 'Dashboard',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  }, 
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    color: 'white',
    padding: 5,
    textAlign: 'center',
    backgroundColor: '#6a6a6a',
    fontSize: 12
  },
  header: {
    fontSize: 20,
    marginHorizontal: 10,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subheader: {
    fontSize: 18,
    marginHorizontal: 10
  },
  credit: {
    fontSize: 12,
    marginHorizontal: 10
  },
  link: {
    textDecorationLine: 'underline',
    fontSize: 12,
    color: 'blue',
    marginHorizontal: 10
  }
});
export default HomeScreen;