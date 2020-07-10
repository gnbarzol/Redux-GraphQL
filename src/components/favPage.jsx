import React from 'react'
import Card from './card';
import '../assets/styles/favPage.css';

const FavPage = ({ characters = [0]}) => {
    const renderCharacter = (char, i) => {
        return (
            <Card key={i} />
        )
    }
    return(
        <div className='container'>
            <h2>Favoritos</h2>
            {characters.map(renderCharacter)}
            {!characters.length && <h3>No hay personajes agregados</h3>}
        </div>
    )
};

export default FavPage;