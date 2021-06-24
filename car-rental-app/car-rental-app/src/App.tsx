import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routes } from './constants';
import NavigationBar from './Components/NavigationBar';
import Footer from '../src/Components/Footer';
import CarDetails from './Components/CarDetails';
import MyBooking from './Components/MyBooking';
import CarListing from './Components/CarListing';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <BrowserRouter>
      <NavigationBar>
        <Switch>
          <Route path={routes.myBooking} component={MyBooking}/>
          <Route path={routes.carDetails} component={CarDetails} />
          <Route path={routes.home} component={CarListing} />
        </Switch>
      </NavigationBar>
    </BrowserRouter>
  );
}

export default App;
