import { createStore, applyMiddleware } from 'redux';
// import films from './resources/films.json';
import reducer from './reducer';
import thunk from "redux-thunk";
 
 
const initialState = {
	earthquakes: [],
	loading: true
}

const store = createStore(reducer, initialState, applyMiddleware(thunk));

export {
	store          
}; 