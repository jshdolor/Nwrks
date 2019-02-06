import { combineReducers } from 'redux'
import confirmModalReducer from '../confirmModalReducer'
import memberReducer from '../memberReducer'

export default combineReducers({
    confirmModal: confirmModalReducer,
    //to minimize calls
    member:memberReducer
});

