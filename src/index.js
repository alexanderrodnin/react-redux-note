import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import {rootReduser} from "./store/reducers";
import MainComponent from './components/MainComponent'

export const ACTION_CHANGE_FIRST_NAME = 'ACTION_CHANGE_FIRST_NAME'
export const ACTION_CHANGE_SECOND_NAME = 'ACTION_CHANGE_SECOND_NAME'

const store = createStore(rootReduser, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <Provider store={store}>
        <MainComponent />
    </Provider>,
    document.getElementById('root'))
