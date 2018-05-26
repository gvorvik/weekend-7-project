import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const studentReviewReducer = (state = {}, action) => {
    if(action.type === 'FEELING_RATING') {
        state.feelingRating = action.payload;
        console.log(state);
    }
    return state;
};

const storeInstance = createStore(

    combineReducers({
        studentReviewReducer,
    }),

    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
