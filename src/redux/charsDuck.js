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


// reducer
export default function reducer(state = initialData, action){
    switch(action.type){
        case GET_CHARACTERS_SUCCES:
            return {...state, array: action.payload};
        default:
            return state;
    }
};

// actions (thunks)
export const getCharactersAction = () => (dispatch, getState) => {
    return axios.get(URL)
        .then((res) => {
            dispatch({
                type: GET_CHARACTERS_SUCCES,
                payload: res.data.results,
            })
        })
} 

