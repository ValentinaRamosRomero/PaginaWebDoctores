import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import { Layout } from "./Layout/Layout";
import { useDentistStates } from "./Context/Context";


function App() {
  const { state} = useDentistStates();

  return (
    <div className={state.theme == "ligth" ? "ligth" : "dark" } >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/favs" element={<Favs />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
