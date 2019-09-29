import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CharacterList from "./components/CharacterList";

const navStyle = {
  listStyleType: 'none',
}
const itemStyle = {
  display: 'inline',
  margin: 10 +'px'
}
 function Navigation() {
   return (
     <ul style={navStyle}>
       <li style={itemStyle}><Link to='/'>Home</Link></li>
       <li style={itemStyle}><Link to='/characters'>Characters</Link></li>
     </ul>
   )
 }

export default function App() {
  return (
    <main>
      <Router>
      <Navigation />
      <Header />
        <Switch>
          <Route exact path='/'>
            <WelcomePage />
          </Route>
          <Route path = '/characters'>
            <CharacterList/>
          </Route>
        </Switch>
      </Router>
    </main>
  );
}
