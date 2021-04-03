import { useEffect, useState } from 'react';

import logo from './logo.svg';


import  Button   from './Components/Button';

import './App.css';

function App() {
  const [text_anchor, setText_anchor] = useState("anchor");
  const [title_h1, setTitle_h1] = useState();
  const [state_a, setState] = useState(true);

  const handleClick = () => {
    setText_anchor("Texto");
  }

  const handleClick2 = () => {
    setTitle_h1("Exercício E");
  }
  useEffect(()=>{ state_a ? setState(false) : console.log("Texto do anchor mudou")}, [text_anchor]);

  return (
    <div className="App">
      <header className="App-header">
      <h1>{title_h1}</h1>

        <img src={logo} className="App-logo" alt="logo" />
        
        <Button func={handleClick2} text="Title Generator" />

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
          {text_anchor}
        </a>
        <Button func={handleClick} text="Link Generator" />
      </header>
    </div>
  );
}

export default App;
