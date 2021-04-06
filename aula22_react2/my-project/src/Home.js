import {useState} from 'react';
import {useHistory} from "react-router-dom";

import Title from "./Title.js";
import logo from "./logo.svg";
import "./App.css";

const Home = () => {
    const [title, setTitle] = useState("Título");
    const [showTitle, setShowTitle] = useState(false);

    const history = useHistory();

    const handleClick = () => {
      setTitle("Novo Título");
      setShowTitle(!showTitle);
    };

    const handleNavigation = () => {
        history.push("/Sobre");
    };
    
    return (

    <div className="App">
    <header className="App-header">
    {showTitle && <Title text={title} />}
      <img src={logo} className="App-logo" alt="logo" />
      

      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>

      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <button onClick={handleClick}>Mostra Título</button>
      <button onClick={handleNavigation}>Sobre</button>
    </header>
  </div>
  );
};

export default Home;