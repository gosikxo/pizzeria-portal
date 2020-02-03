import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import { PUBLIC_URL } from './settings';
import MainLayout from './components/layout/MainLayout';
import Homepage from './components/views/Homepage/Homepage';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Booking from './components/views/Booking/Booking';
import Event from './components/views/Event/Event';
import Ordering from './components/views/Ordering/Ordering';
import NewOrderContainer from './components/views/NewOrder/NewOrderContainer';
import Order from './components/views/Order/Order';
import Kitchen from './components/views/Kitchen/Kitchen';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={`${PUBLIC_URL}/panel`}>
        <MainLayout>
          <Switch>
            <Route exact path={'/'} component={Homepage} />
            <Route exact path={'/login'} component={Login} />
            <Route exact path={'/tables'} component={Tables} />
            <Route exact path={'/tables/booking/:id'} component={Booking} />
            <Route exact path={'/tables/event/:id'} component={Event} />
            <Route exact path={'/ordering/'} component={Ordering} />
            <Route exact path={'/ordering/new/'} component={NewOrderContainer} />
            <Route exact path={'/ordering/order/:id'} component={Order} />
            <Route exact path={'/kitchen'} component={Kitchen} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
