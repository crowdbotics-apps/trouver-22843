import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn160176543Reducer from '../features/SignIn160176543/redux/reducers'
import SignIn161176542Reducer from '../features/SignIn161176542/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn160176543: SignIn160176543Reducer,
SignIn161176542: SignIn161176542Reducer,

});