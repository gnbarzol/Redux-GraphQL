import React from 'react'
import '../assets/styles/login.css';
import { connect } from 'react-redux';
import {doGoogleLoginAction} from '../redux/userDuck';

const Login = ({ fetching, doGoogleLoginAction }) => {

    const doLogin = () => {
        doGoogleLoginAction();
    }
    
    if (fetching) return <h2>Esperando inicio con Google...</h2>;
    return (
        <div className='container'>
            <h1>
                Inicia Sesión con Google
            </h1>
            <h1>
                Cierra tu sesión
            </h1>
            <button onClick={doLogin}>
                Iniciar
            </button>
            <button>
                Cerrar Sesión
            </button>
        </div>
    )
}

const mapStateToProps = ({ user }) => {
    return {
        fetching: user.fetching,
    }
}

const mapDispatchToProps = {
    doGoogleLoginAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);