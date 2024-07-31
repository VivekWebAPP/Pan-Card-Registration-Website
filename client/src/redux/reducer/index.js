import { combineReducers } from 'redux';
import AuthonicationReducer from './AuthonicationReducer';
import AddressReducer from './AddressReducer';

const CombinedReducer = combineReducers({
    authonication:AuthonicationReducer,
    addressReducer:AddressReducer,
});

export default CombinedReducer;