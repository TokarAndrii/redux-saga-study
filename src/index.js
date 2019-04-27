import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'
import store from './components/app/store';
import routes from './configs/routes'
import './index.css';
import App from './components/app/App'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path={routes.INDEX} component={App} />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));


serviceWorker.unregister();
