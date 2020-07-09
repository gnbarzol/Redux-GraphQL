import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Home from '../components/home';
import FavPage from '../components/favPage';
import Login from '../components/login';

const Routes = () => {
    return (
    // <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/favs' component={FavPage}/>
            <Route exact path='/login' component={Login}/>
        </Switch>
    // </BrowserRouter>
)}

export default Routes;