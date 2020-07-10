import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import userReducer from './userDuck'; //Como esta export default le puedo poner cualquier nombre, en este caso userReducer
import thunk from 'redux-thunk'; //Para hacer consumos al backend

//Para tener un solo reducer que sera la combinacion de muchos
let roorReducer = combineReducers({
    user: userReducer,
});

//Pregunta si el navegador soporta las herramientas de desarrollo
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Esta funcion va a crear el Store y lo va a retornar
export default function generateStore() {
    //Recibe el reducer, estado inicial(en este caso no le pasamos), middleware que querramos que soporte el store
    let store = createStore(
        roorReducer, 
        composeEnhancers(applyMiddleware(thunk)),
    );
    return store;
}