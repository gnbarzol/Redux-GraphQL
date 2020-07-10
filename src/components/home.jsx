import React from 'react';
import Card from './card';
import '../assets/styles/home.css';
import { connect } from 'react-redux'; //Conecta nuestro componente con redux

const Home = ({ chars }) => {

    const renderChar = () => {
        let char = chars[0];
        return(
            <Card {...char}/>
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

export default connect(mapStateToProps, null)(Home);
//El connect tiene dos funciones
//Pedir datos que ya tiene el store

//Despachar una accion