import { loginWithGoogle, signOutGoogle } from '../firebase';

// Constanst
const initialData = {
    fetching: false,
    loggedIn: false,
}

const LOGIN = 'LOGIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_ERROR = 'LOGIN_ERROR';

const LOG_OUT = 'LOG_OUT';

// Reducers
export default function reducer(state = initialData , action) {
    switch(action.type) {
        case LOGIN:
            return {...state, fetching: true};
        case LOGIN_SUCCESS:
            return {...state, fetching: false,loggedIn: true , ...action.payload}
        case LOGIN_ERROR:
            return {...state, fetching: false, error: action.payload};
        case LOG_OUT:
            return {...initialData};
        default:
            return state;
    }
}

//Auxiliar 
const saveStorage = (user) => {
    localStorage.user = JSON.stringify(user);
}

// Actions 
export const doGoogleLoginAction = () => (dispatch, getState) => {
    dispatch({
        type: LOGIN,
    })
    return loginWithGoogle()
        .then(user => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {
                    uid: user.uid,
                    displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                },
            });
            saveStorage(getState().user);
        })
        .catch(err => {
            dispatch({
                type: LOGIN_ERROR,
                payload: err.message,
            })
        })
}

//Obtener al user del localStorage
export const restoreSessionAction = () => (dispatch) => {
    let user = localStorage.getItem('user');
    user = JSON.parse(user);
    if(user) {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: user,
        })
    }
}

export const logOutAction = () => (dispatch, getState) => {
    //Cerramos sesion en firebase
    signOutGoogle();
    dispatch({
        type: LOG_OUT,
    })
    //Eliminamos al user del localStorage
    localStorage.removeItem('user');
}