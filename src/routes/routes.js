import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

import Home from '../components/home';
import FavPage from '../components/favPage';
import Login from '../components/login';

const PrivateRoute = ({path, component, loggedIn, ...rest}) => {
    if(loggedIn)
        return <Route path={path} component={component} {...rest} />;
    alert('Inicia sesión para ver este apartado');
    return <Redirect to='/login' {...rest}/>;
}

const Routes = ({loggedIn}) => {
    return (
    // <BrowserRouter>
        <Switch>
            <PrivateRoute exact path='/' component={Home} loggedIn={loggedIn}/>
            <PrivateRoute path='/favs' component={FavPage} loggedIn={loggedIn}/>
            <Route path='/login' component={Login}/>
        </Switch>
    // </BrowserRouter>
)}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.user.loggedIn,
    }
}

export default connect(mapStateToProps, null)(Routes);