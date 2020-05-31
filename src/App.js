import React from "react";
import "./App.css";
import Navbar1 from "./components/layout/Navbar1";
import Lyrics from "./components/tracks/Lyrics";
import Index from "./components/layout/Index";
// import Test from './components/tracks/Test'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ContextProvider } from "./context";
const App = () => (
  <ContextProvider>
    <Router>
      <>
        <Navbar1 />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/lyrics/track/:id" component={Lyrics} />
          </Switch>
        </div>
      </>
    </Router>
  </ContextProvider>
);

export default App;
