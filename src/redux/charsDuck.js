import axios from 'axios';

// Constanst
const initialData = {
    fetching: false,
    array: [],
    current: {},
}

const URL = "https://rickandmortyapi.com/api/character";

const GET_CHARACTERS = 'GET_CHARACTERS';
const GET_CHARACTERS_SUCCES = 'GET_CHARACTERS_SUCCES';
const GET_CHARACTERS_ERROR = 'GET_CHARACTERS_ERROR';

const REMOVE_CHARACTER = 'REMOVE_CHARACTER';

// reducer
export default function reducer(state = initialData, action){
    switch(action.type){
        case GET_CHARACTERS:
            return {...state, fetching: true};
        case GET_CHARACTERS_SUCCES:
            return {...state, array: action.payload, fetching: false};
        case GET_CHARACTERS_ERROR:
            return {...state, fetching: false, error: action.payload};
        case REMOVE_CHARACTER:
            return {...state, array: action.payload};
        default:
            return state;
    }
};

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

