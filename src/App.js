import React from "react";
import { LocationContainer } from "./components/locations/LocationsContainer";
import { CharacterContainer } from "./components/characters/CharacterContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">Rick and Morty Dead or Alive</header>
        <Switch>
          <Route exact path="/" component={LocationContainer} />
          <Route exact path="/characters" component={CharacterContainer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
