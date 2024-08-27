import React, {  useEffect, useRef, useState } from 'react';
import './Titilecards.css'
import cards_data from '../../assets/cards/Cards_data';
import { Link } from 'react-router-dom';



const TitileCards = ({title, category}) => {

const [apiData, setApiData] = useState ([]);
  const cardsRef= useRef();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDEyNjJmNDFkZGY0ZDcxY2JmNDE3NDZmMjcxZWI4OSIsIm5iZiI6MTcyMzkyMjMzOC42Mzc2MjUsInN1YiI6IjY2YzBmNWI5Yjg2NTNmMmUxZDg5ODk5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OWFcpYCuSoFXdsr_OzN6OXK6nL6RmUu8Kdkh4jY-wSI'
    }
  };
  
 

const handlewheel = (event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltay;
}


useEffect(()=>{

  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => setApiData(response.results))
  .catch(err => console.error(err));

  cardsRef.current.addEventListener('wheel', handlewheel)
},[])

  return (
    <div className='titlecards'>
     <h2>Populer on Netflix</h2>
     <div className="card-list" ref={cardsRef}>
      {apiData.map((card, index)=>{
        return <Link to={`/player/${card.id}`} className="card">
          <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
          <p>{card.original_title}</p>
        </Link>
                                       
      })}
     </div>
    </div>
  )
}

export default TitileCards