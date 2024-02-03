import { useState } from 'react';
import './style/App.css';
//import { Outlet} from "react-router-dom";
import Home from "./component/homepage/Home.jsx";
//import Home from "./component/homepage/sections/TopCat.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
    </>
  )
}

export default App
