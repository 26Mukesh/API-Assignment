import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import {applyMiddleware,createStore} from 'redux';

//Reducers specify how the application's state changes in response to actions sent to the store
const reducer = (state ,action) => {
    switch(action.type){
        case "Add":
        state = state + action.payload;
        break;

        default:
    }
    return state;
};

const logger = (store) => (next) => (action) =>{
    console.log("action fired ",action);
    next(action);
}
//common use case for middleware is to support asynchronous actions
const middleware = applyMiddleware(logger);

//A store holds the whole state tree of your application
const store = createStore(reducer , 1 , middleware);

//subscribe to display state in console 
store.subscribe(() => {
    console.log("New State is ",store.getState());
});

//Dispatches an action. This is the only way to trigger a state change.
store.dispatch({
    type: "Add",
    payload:22
})

ReactDOM.render(
// Provider is given the store as a prop
<Provider store={store}>
<App /> 
</Provider>, document.getElementById('root'));


registerServiceWorker();
