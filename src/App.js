
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Header from './Header/header';
import Home from './Home/home';
import About from './About/about';
import Contact from './Contact/contact';
import Movies from './Movies/movies';
import MovieDetailes from './Movies/movieDetailes';
function App() {
  return (
    <>
    <Router>
    <Header/>
     <Switch>
  <Route path="/" exact component={Home}/>
  <Route path="/about" exact component={About}/>
  <Route path="/contact" exact component={Contact}/>
  <Route path="/movies" exact component={Movies}/>
  <Route path="/detailes/:id" exact component={MovieDetailes}/>
  </Switch>
</Router>
    </>
  
  );
}

export default App;
