import React from "react";
import { Link } from 'react-router-dom';
import { useDentistContext } from '../Components/utils/global.context';

const Favs = () => {
  const { state, handleFavorite } = useDentistContext();

  const renderFavoriteDentists = () => {
    return state.favorites.map((dentist) => (
      <div key={dentist.id} className="dentist-card">
        <Link to={`/dentist/${dentist.id}`}>
          <img src="images/doctor.jpg" alt="doctor.jpg" />
          <h2>{dentist.name}</h2>
          <p>{dentist.username}</p>
        </Link>
        <button onClick={() => handleFavorite(dentist)} className="favButton">
          {state.favorites.some((fav) => fav.id === dentist.id)
            ? 'Remove from favs'
            : 'Add to favs'}
        </button>
      </div>
    ));
  };
  return (
      <div className="card-grid">
        <h1>Dentists Favs</h1>
        <div className="card">
          {state.favorites.length > 0 ? (
            renderFavoriteDentists()
          ) : (
            <p>No tienes usuarios favoritos.</p>
          )}
        </div>
      </div>
  );
};

export default Favs;
