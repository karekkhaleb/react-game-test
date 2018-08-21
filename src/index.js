import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import { combineReducers, createStore} from 'redux';
import { Provider } from 'react-redux';
import productsReducers from './stateManagement/reducers/productsReducer';
import userReducers from './stateManagement/reducers/userReducer';
import levelReducer from './stateManagement/reducers/levelReducer';

// function productsReducer(state=[], action){
//     return state;
// }
// function userReducer(state = '', {type, payload}){
//     switch (type) {
//         case 'updateUser':
//             return payload;
//     }
//     return state;
// }
const allReducers = combineReducers({
    user: userReducers,
    level: levelReducer
});
const store = createStore(
    allReducers,
    {
        user: 'Michael',
        level: 1
    },
    window.devToolsExtension && window.devToolsExtension()
);




ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
