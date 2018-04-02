import axios from 'axios';
import { setDayEarthquakes } from './state';
import moment from 'moment';
const API_BASE_CALL = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson';

const dayAgo = moment().utc().subtract(24, "hour").format('YYYY-MM-DDTHH:mm:ss');

const getDayEarthquakes = () => dispatch => {
	axios.get(`${API_BASE_CALL}&starttime=${dayAgo}`).then(res => {
		const earthquakes = res.data.features;
		dispatch(setDayEarthquakes(earthquakes));
	})
}; 

export { getDayEarthquakes };     