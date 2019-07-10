import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from "../Views/Homepage"; 

const Home = () => {
    return (
        <Switch>
            <Route path="/" exact component={ Homepage }></Route>
        </Switch>
    )
   
}
export default Home;