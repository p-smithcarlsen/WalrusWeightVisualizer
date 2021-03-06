import {applyMiddleware, combineReducers, createStore} from 'redux';
import {weights} from '../weights/redux/reducers';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {calculator} from "../calculator/reducers";

const reducers = {
    weights,
    calculator
};

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2
}

export const initial_weights = [
    {
        weight: 0
    },
    {
        weight: 6
    },
    {
        weight: 10
    },
    {
        weight: 5
    }
]

export const initial_goal = 8;


const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducer);


export const configureStore = () => createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));