import MainNavigation from '../screens/MainNavigation.js';
import {connect} from 'react-redux';
import { getDayEarthquakes } from '../data/actions/api';
  
const mapStateToProps = (state) => ({
  earthquakes: state.earthquakes,
  loading: state.loading 
});

const mapDispatchToProps = (dispatch) => {
	return {
		onLoad: () => dispatch(getDayEarthquakes()),
	};
}; 
 
export default connect(mapStateToProps, mapDispatchToProps)(MainNavigation);