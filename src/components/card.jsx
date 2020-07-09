import React from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';

import '../assets/styles/card.css';


let rick = 'https://rickandmortyapi.com/api/character/avatar/1.jpeg';

const onClick = (text) => {
    return () => console.log(text);
}

const Card = ({name, image, rightClick, leftClick}) => {
    return (
        <div className='container'>
            <div className='card'>
                <img alt="rick" src={image} />
                <p className='name'>
                    {name}
                </p>
                <div className='actions'>
                    <div
                        onClick={leftClick || onClick('left')}
                        className='left'>
                        <FontAwesome
                            name="thumbs-down"
                            size="2x"
                        />
                    </div>
                    <div
                        onClick={rightClick || onClick('right')}
                        className='right'>
                        <FontAwesome
                            name="heart"
                            size="2x"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    leftClick: PropTypes.func,
    rightClick: PropTypes.func,
}

Card.defaultProps = {
    name: 'Rick Sanchez',
    image: rick,
}

export default Card;
