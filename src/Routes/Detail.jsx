import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer
  //un fetch a un user en especifico
  const [dentist, setDentist] = useState({});

  /*const { id } = useParams();
  console.log(id);*/

  const params = useParams();

  const url = "https://jsonplaceholder.typicode.com/users/" + params.id;

  useEffect(() => {
    axios(url)
      .then((res) => {
        console.log(res.data);
        setDentist(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <h2>Nombre: {dentist.name}</h2>
      <h2>Email: {dentist.email}</h2>
      <h2>Telefono: {dentist.phone}</h2>
      <h2>Sitio Web: {dentist.website}</h2>
    </>
  );
};

export default Detail;
