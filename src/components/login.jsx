import React from 'react'
import '../assets/styles/login.css';
import { connect } from 'react-redux';
import {doGoogleLoginAction, logOutAction} from '../redux/userDuck';

const Login = ({ fetching , loggedIn, displayName, photoURL , doGoogleLoginAction, logOutAction }) => {

    const doLogin = () => {
        doGoogleLoginAction();
    }
    
    if (fetching) return <h2>Esperando inicio con Google...</h2>;
    return (
        <div className='container'>
            {loggedIn?
                (<h1>{displayName}</h1>) :
                (<h1>Inicia Sesión con Google</h1>)
            }
            {loggedIn && <img src={photoURL} height='150' alt='userPhoto' ></img>}
            {loggedIn?
                <button onClick={logOutAction}>Cerrar Sesión</button> :
                <button onClick={doLogin}>Iniciar</button>
            }
        </div>
    )
}

const mapStateToProps = ({ user: {fetching, loggedIn, displayName, photoURL} }) => {
    return {
        fetching,
        loggedIn,
        displayName,
        photoURL,
    }
}

const mapDispatchToProps = {
    doGoogleLoginAction,
    logOutAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);