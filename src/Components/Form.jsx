import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Message } from "./Message";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [paciente, setPaciente] = useState({
    nombre: "",
    email: "",
  });

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (paciente.nombre.length > 5 && regexEmail.test(paciente.email)) {
      setShow(true);
    } else setError(true);
  };
  console.log(paciente);

  return (
    <div>
      {show ? (
        <Message nombre={paciente.nombre} email={paciente.email} />
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Nombre Completo</label>
          <input
            type="text"
            value={paciente.nombre}
            onChange={(event) =>
              setPaciente({ ...paciente, nombre: event.target.value })
            }
          />

          <label>Email</label>
          <input
            type="email"
            value={paciente.email}
            onChange={(event) =>
              setPaciente({ ...paciente, email: event.target.value })
            }
          />
          <button>Enviar</button>
          {error ? (
            <h4>Por favor verifique su información nuevamente</h4>
          ) : null}
        </form>
      )}
    </div>
  );
};

export default Form;
