import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Navbar from './Navbar';
import About from '../pages/About';
import CocktailDetails from '../pages/CocktailDetails';
import ErrorPage from '../pages/ErrorDisplayer';

const App = () => {
    return (
        <Router>
            <Navbar/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/cocktail/:id">
                        <CocktailDetails/>
                    </Route>
                    <Route path="*">
                        <ErrorPage/>
                    </Route>
                </Switch>
        </Router>
    )
};

export default App;