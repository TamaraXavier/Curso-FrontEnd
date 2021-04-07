import Button from "../components/Button"
import logo from '../images/logo.svg'
import '../styles/App.css';

import { useState } from 'react'
import { useHistory } from "react-router-dom";


const Home = () =>{
    const [title_h1, setTitle_h1] = useState()

    const history = useHistory();
    const handleClick2 = () =>{
      setTitle_h1("Texto")
    }
    const handleNavigationToPosts = () =>{
      history.push("/posts")
   }
   const handleNavigationToPost = () =>{
    history.push("/create-post")
 }
    const handleNavigationToComments = () => {
      history.push("/comments")
    }

    return (
    <div className="App">
      <header className="App-header">
        <h1>{title_h1}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <Button func={handleClick2} text="title generator" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button func={handleNavigationToPosts} text="post list"/>
        <p></p>
        <Button func={handleNavigationToComments} text="comments"/>
        <p></p>
        <Button func={handleNavigationToPost} text="to do posting"/>        
        <p></p>
      </header>
    </div>
    );
}

export default Home;