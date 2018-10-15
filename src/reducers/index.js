import { combineReducers } from 'redux';
import gifsReducer from './gifsReducer';
import selectReducer from './selectReducer';
import { reducer as reduxForm } from 'redux-form';
import favoritesReducer from './favoritesReducer';
export default combineReducers({
  gifs:gifsReducer,
   form: reduxForm,
  select:selectReducer,
  favorites:favoritesReducer
});
