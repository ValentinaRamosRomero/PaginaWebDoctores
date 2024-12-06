import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDentistStates } from "../Context/Context";
import doctor from "/public/images/doctor.jpg";
const Card = ({ dentist }) => {
  //{ name, username, id }
  // const { favs, setFavs } = useDentistStates();

  const { state, dispatch } = useDentistStates();

  const isFavorite = state.favs.some((fav) => fav.id === dentist.id);

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    if (!isFavorite) {
      //setFavs((prevFavs) => [...prevFavs, dentist]);
      dispatch({ type: "ADD_FAV", payload: dentist });
    } else {
      alert("Este dentista ya está en tus favoritos.");
    }
  };

  const removeFav = () => {
    //setFavs((prevFavs) => prevFavs.filter((fav) => fav.id !== dentist.id));
    dispatch({ type: "DELETE_FAV", payload: dentist });
  };

  return (
    <div className="card">
      <img src={doctor} alt="doctor" />
      <Link to={`/detail/${dentist.id}`}>
        <h3>{dentist.name}</h3>
        <h3>{dentist.username}</h3>
      </Link>
      {isFavorite ? (
        <>
          <button onClick={removeFav} className="favButton">
            Delete fav
          </button>
        </>
      ) : (
        <button onClick={addFav} className="favButton">
          Add fav
        </button>
      )}
    </div>
  );
};

export default Card;
/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */
/* En cada card deberan mostrar en name - username y el id */
