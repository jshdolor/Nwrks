import { combineReducers } from 'redux'
import confirmModalReducer from '../confirmModalReducer'

export default combineReducers({
    confirmModal: confirmModalReducer
});

