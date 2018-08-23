import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { combineReducers, createStore} from 'redux';
import { Provider } from 'react-redux';
import levelReducer from './stateManagement/reducers/levelReducer';
import possibilityReducer from './stateManagement/reducers/possibilitiesReducer';
import lifeReducer from './stateManagement/reducers/lifeReducer';
import clicksReducer from './stateManagement/reducers/clicksReducer';
import timeReducer from './stateManagement/reducers/timeReducer';
import remainingBoxes from './stateManagement/reducers/remainingLevelBoxesReducer';
import availableBoxesReducer from './stateManagement/reducers/availableBoxesPerClickReducer';
import canPlayReducer from './stateManagement/reducers/canPlayReducer';

const allReducers = combineReducers({
    level: levelReducer,
    lives: lifeReducer,
    possibilities: possibilityReducer,
    clicked: clicksReducer,
    timer: timeReducer,
    remainingBoxes,
    availableBoxes: availableBoxesReducer,
    canPlay: canPlayReducer
});
const store = createStore(
    allReducers,
    {
        level: parseInt(localStorage.getItem('level')) || 1,
        lives: parseInt(localStorage.getItem('life')) || 1,
        possibilities: [],
        clicked: [],
        timer: 0,
        remainingBoxes: [],
        availableBoxes: [],
        canPlay: false
    },
    window.devToolsExtension && window.devToolsExtension()
);



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
