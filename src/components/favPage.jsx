import React from 'react'
import Card from './card';
import '../assets/styles/favPage.css';
import { connect } from 'react-redux';

const FavPage = ({ characters = [0]}) => {
    const renderCharacter = (char, i) => {
        return (
            <Card fav {...char} key={i} />
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

const mapStateToProps = ({characters}) => {
    return {
        characters: characters.favorites,
    }
}

export default connect(mapStateToProps, null)(FavPage);