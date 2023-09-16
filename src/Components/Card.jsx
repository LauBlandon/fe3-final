import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDentistContext } from './utils/global.context';

const Card = () => {
  const { state, fetchDentists, handleFavorite } = useDentistContext();
  useEffect(() => {
    fetchDentists();
  }, [fetchDentists]);


  return (
    <div className="card">
      {state.dentists.map((dentist) => (
        <div key={dentist.id} className="dentist-card">
          <Link to={`/dentist/${dentist.id}`}>
            <img src="images/doctor.jpg" alt="Img-Dentist" />
            <h2>{dentist.name}</h2>
            <p>{dentist.username}</p>
          </Link>
          <button onClick={() => handleFavorite(dentist)} className="favButton">
            {state.favorites.some((fav) => fav.id === dentist.id)
              ? 'Remove from favs'
              : 'Add to favs'}
          </button>
        </div>
      ))}
    </div>
  );
};
export default Card;