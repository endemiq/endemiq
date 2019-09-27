import { combineReducers } from 'redux';

import { reducers as places } from './places/index';
import { reducers as ui } from './ui/index';

const rootReducer = combineReducers({
  places,
  ui,
});

export default rootReducer;
