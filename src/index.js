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
        return {...state, feelingRating: action.payload};
    }
    else if(action.type === 'CONTENT_UNDERSTANDING_RATING') {
        return {...state, contentUnderstandingRating: action.payload};
    }
    else if(action.type === 'SUPPORT_RATING') {
        return {...state, supportRating: action.payload};
    }
    else if(action.type === 'SUBMIT_FEEDBACK') {
        return {...state, feedbackComment: action.payload};
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
