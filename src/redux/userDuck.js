import { loginWithGoogle } from '../firebase';

// Constanst
const initialData = {
    fetching: false,
    loggedIn: false,
}

const LOGIN = 'LOGIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_ERROR = 'LOGIN_ERROR';

// Reducers
export default function reducer(state = initialData , action) {
    switch(action.type) {
        case LOGIN:
            return {...state, fetching: true};
        case LOGIN_SUCCESS:
            return {...state, fetching: false,loggedIn: true , ...action.payload}
        case LOGIN_ERROR:
            return {...state, fetching: false, error: action.payload};
        default:
            return state;
    }
}

//Auxiliar 
const saveStorage = (storage) => {
    localStorage.storage = JSON.stringify(storage);
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
            saveStorage(getState());
        })
        .catch(err => {
            dispatch({
                type: LOGIN_ERROR,
                payload: err.message,
            })
        })
}