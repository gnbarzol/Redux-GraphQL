import axios from 'axios';
import {updateFavs, getFavs} from '../firebase';

// Constanst
const initialData = {
    fetching: false,
    array: [],
    current: {},
    favorites: [],
}

const URL = "https://rickandmortyapi.com/api/character";

const GET_CHARACTERS = 'GET_CHARACTERS';
const GET_CHARACTERS_SUCCES = 'GET_CHARACTERS_SUCCES';
const GET_CHARACTERS_ERROR = 'GET_CHARACTERS_ERROR';

const REMOVE_CHARACTER = 'REMOVE_CHARACTER';

const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';

const GET_FAVS = 'GET_FAVS';
const GET_FAVS_SUCCESS = 'GET_FAVS_SUCCESS';
const GET_FAVS_ERROR = 'GET_FAVS_ERROR';

const CLEAR_FAVS = 'CLEAR_FAVS';


// reducer
export default function reducer(state = initialData, action){
    switch(action.type){
        case GET_CHARACTERS:
            return {...state, fetching: true};
        case GET_CHARACTERS_SUCCES:
            return {...state, array: action.payload, fetching: false};
        case GET_CHARACTERS_ERROR:
            return {...state, fetching: false, errChars: action.payload};
        case REMOVE_CHARACTER:
            return {...state, array: action.payload};
        case ADD_TO_FAVORITE:
            return {...state, ...action.payload};
        case GET_FAVS:
            return {...state, fetching: true};
        case GET_FAVS_SUCCESS:
            return {...state, fetching: false, favorites: action.payload};
        case GET_FAVS_ERROR:
            return {...state, fetching: false, errFavs: action.payload};
        case CLEAR_FAVS:
            return {...initialData};
        default:
            return state;
    }
};
// Axiliar
const saveStorageFavs = (favs) => {
    localStorage.favs = JSON.stringify(favs);
}

// actions (thunks)
export const getCharactersAction = () => (dispatch, getState) => {
    dispatch({
        type: GET_CHARACTERS,
    })
    return axios.get(URL)
        .then((res) => {
            dispatch({
                type: GET_CHARACTERS_SUCCES,
                payload: res.data.results,
            })
        })
        .catch(err => {
            dispatch({
                type: GET_CHARACTERS_ERROR,
                payload: err.message,
            })
        })
} 

export const removeCharacterAction = () => (dispatch, getState) => {
    let { array } = getState().characters; //getState me retorna un arreglo de todo el store
    array.shift(); //Elimino el primer elemento del array
    dispatch({
        type: REMOVE_CHARACTER,
        payload: [...array], //Devuelvo un nuevo array
    })
}

export const addFavoriteAction = () => (dispatch, getState) => {
    let state = getState();
    let { array, favorites } = state.characters;
    let { uid } = state.user;
    let character = array.shift();
    favorites.push(character);
    //Guarda los favs en la db
    updateFavs(favorites, uid);
    saveStorageFavs(favorites);
    dispatch({
        type: ADD_TO_FAVORITE,
        payload: { array: [...array], favorites: [...favorites] },
    })
}

export const retrieveFavs = () => (dispatch, getState) => {
    dispatch({
        type: GET_FAVS,
    })
    let { uid } = getState().user;
    return getFavs(uid)
        .then((array) => {
            dispatch({
                type: GET_FAVS_SUCCESS,
                payload: [...array],
            })
            saveStorageFavs(array);
        })
        .catch(err => {
            dispatch({
                type: GET_FAVS_ERROR,
                payload: err.message,
            })
        })
}

//Recuperar favoritos de localStorage
export const restoreFavsAction = () => (dispatch) => {
    let favs = localStorage.getItem('favs');
    favs = JSON.parse(favs);
    if(favs){
        dispatch({
            type: GET_FAVS_SUCCESS,
            payload: favs,
        })
    }
}

//Eliminar favs 
export const clearFavs = () => (dispatch) => {
    dispatch({
        type: CLEAR_FAVS,
    })
}
