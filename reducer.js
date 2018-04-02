import { setDayEarthquakes } from './data/actions/state';
import { initialState } from './store';

const reducer = (state, action) => {
	switch (action.type) {
		case "setDayEarthquakes":
			state = initialState;
	 		return {
	 			...state,
	 			earthquakes: action.payload,
	 			loading: false
		};
		default: 
      		return state;     
	}
  }; 

export default reducer;
      