import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxThunk from 'redux-thunk';
import App from './components/app';
import reducers from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

class Application extends Component {
  render() {
    return (
        <Provider store={createStoreWithMiddleware(reducers)}>
            <BrowserRouter>
                <div className="App">
                    <Switch>
                        <Route exact path="/" component={App} />
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>
    );
  }
}

render(<Application />, document.getElementById('root'));
