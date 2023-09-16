import React, { createContext, useContext, useReducer, useEffect } from "react";

export const themes = {
  light: {
    font: 'black',
    background: 'white'
  },
  dark: {
    font: '#ffffff',
    background: 'black'
  }
};

const ThemeContext = createContext(themes.light);

export default ThemeContext;

export const ContextProvider = ({ children }) => {

  return (
    <ThemeContext.Provider value={{}}>
      {children}
    </ThemeContext.Provider>
  );
};


const initialStateDentist = {
  dentists: [],
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
};

const DentistContext = createContext();

const DentistReducer = (state, action) => {
  switch (action.type) {
    case 'SET_DENTISTS':
      return { ...state, dentists: action.payload };
    case 'TOGGLE_FAVORITE':
      const dentistToAddOrRemove = action.payload;
      const isFavorite = state.favorites.some((fav) => fav.id === dentistToAddOrRemove.id);

      if (isFavorite) {
        const updatedFavorites = state.favorites.filter((fav) => fav.id !== dentistToAddOrRemove.id);
        return { ...state, favorites: updatedFavorites };
      } else {
        return { ...state, favorites: [...state.favorites, dentistToAddOrRemove] };
      }
    default:
      return state;
  }
};

const fetchDentists = (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
      dispatch({ type: 'SET_DENTISTS', payload: data });
    })
    .catch((error) => {
      console.error('Error al obtener datos de:', error);
    });
};

export const DentistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DentistReducer, initialStateDentist);
  useEffect(() => {
    fetchDentists(dispatch);
  }, []);

  const handleFavorite = (dentist) => {
    dispatch({ type: 'TOGGLE_FAVORITE', payload: dentist });
    localStorage.setItem('favorites', JSON.stringify(state.favorites));
  };
  return (
    <DentistContext.Provider value={{ state, dispatch, fetchDentists, handleFavorite }}>
      {children}
    </DentistContext.Provider>
  );
};

export const useDentistContext = () => {
  return useContext(DentistContext);
};
