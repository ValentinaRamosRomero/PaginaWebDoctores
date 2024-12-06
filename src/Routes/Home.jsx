import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { useDentistStates } from "../Context/Context";
import axios from "axios";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  /*const [dentist, setDentist] = useState([])
  const url = "https://jsonplaceholder.typicode.com/users"*/

  // const { dentists } = useDentistStates();
  const { state } = useDentistStates();

  return (
    <main className="main">
      <h1>Home</h1>
      <div className="card-grid">
        {state.dentists.map((dentist) => (
          <Card key={dentist.id} dentist={dentist} />
        ))}
      </div>
    </main>
  );
};

export default Home;
