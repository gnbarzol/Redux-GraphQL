import React from 'react'
import '../assets/styles/login.css';

const Login = () => {
    return (
        <div className='container'>
            <h1>
                Inicia Sesión con Google
            </h1>
            <h1>
                Cierra tu sesión
            </h1>
            <button>
                Iniciar
            </button>
            <button>
                Cerrar Sesión
            </button>
        </div>
    )
}

export default Login;