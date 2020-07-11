import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'; //Para hacer consumos al backend
import userReducer, {restoreSessionAction} from './userDuck'; //Como esta export default le puedo poner cualquier nombre, en este caso userReducer
import charsReducer, { restoreFavsAction} from './charsDuck';

//Para tener un solo reducer que sera la combinacion de muchos
let roorReducer = combineReducers({
    user: userReducer,
    characters: charsReducer,
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

    //Como yo quiero llamar un action por defecto en especifico
    restoreSessionAction()(store.dispatch); //recupera la sesion del usuario del localstorage
    restoreFavsAction()(store.dispatch);
    return store;
}