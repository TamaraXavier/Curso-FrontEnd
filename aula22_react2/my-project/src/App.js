import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from "./Home"; 
import Sobre from "./Sobre";
import Posts from "./Posts";

import Comments from "./components/Comments";


function App() {
  return (
  <Router>
    <Switch>
      <Route path="/Sobre">
        <Sobre />
      </Route>

      <Route path="/Comments">
          <Comments />
        </Route>

      <Route path="/posts">
        <Posts />
      </Route>


  <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
  );

};

export default App;
