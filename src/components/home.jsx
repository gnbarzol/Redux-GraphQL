import React,{ useState, useEffect } from 'react';
import Card from './card';
import '../assets/styles/home.css';

let URL = "https://rickandmortyapi.com/api";

const Home = () => {

    const [chars, setChars] = useState([]);

    useEffect(()=>{
        getCharacters();
    }, []);

    const nextChar = () => {
        chars.shift(); //Elimina el primer elemento del array
        if(!chars.length){
            //Obtener mas personajes
        }
        setChars([...chars]);
    }

    const renderChar = () => {
        let char = chars[0];
        return(
            <Card leftClick={nextChar} {...char}/>
        )
    }

    const getCharacters = () => {
        fetch(`${URL}/character`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setChars(data.results);
            })
    }

    return (
        <div>
            <h2>Personajes de Rick y Morty</h2>
            <div>
                {renderChar()}
            </div>
        </div>
    )
}

export default Home;