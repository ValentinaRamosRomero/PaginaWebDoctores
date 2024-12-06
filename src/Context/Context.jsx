import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { reducer } from "./reducer";
import axios from "axios";

const DentistStates = createContext();
const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];

const initialState = {
  favs: lsFavs,
  dentists: [],
  theme: "ligth",
};

export const Context = ({ children }) => {
  /*const [favs, setFavs] = useState(lsFavs);
  const [dentists, setDentists] = useState([]);
  const [theme, setTheme] = useState("");*/

  const [state, dispatch] = useReducer(reducer, initialState);
  //console.log(state);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url)
      .then((res) => {
        console.log(res);
        //setDentists(res.data);
        dispatch({ type: "GET_DENTISTS", payload: res.data});
      })
      .catch((err) => {
        console.error("Error fetching dentists: ", err);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  return (
    //<DentistStates.Provider value={{ favs, dentists, setFavs }}>
    <DentistStates.Provider value={{ state, dispatch }}>
      {children}
    </DentistStates.Provider> 
  );
};

export const useDentistStates = () => useContext(DentistStates);
