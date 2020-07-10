import React from 'react';
import Card from './card';
import '../assets/styles/home.css';
import { connect } from 'react-redux'; //Conecta nuestro componente con redux
import {removeCharacterAction, addFavoriteAction} from '../redux/charsDuck';

const Home = ({ chars, removeChar, addFavorite }) => {

    const renderChar = () => {
        let char = chars[0];
        return(
            <Card leftClick={removeChar} rightClick={addFavorite} {...char}/>
        )
    }

    return (
        <div className='container'>
            <h2>Personajes de Rick y Morty</h2>
            <div>
                {renderChar()}
            </div>
        </div>
    )
}

//Me retorna props al componente
const mapStateToProps = (state) => {
    return {
        chars: state.characters.array,
    }
};

//El connect se encarga de pasarle el dispatch y getState, esa es la ventaja de que si lo hacemos manual como en store.js
const mapDispatchToProps = {
    removeChar: removeCharacterAction,
    addFavorite: addFavoriteAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
//El connect tiene dos funciones
//Pedir datos que ya tiene el store

//Despachar una accion