import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Aboutpage from '../Views/Aboutpage';

const About = () => {
    return (
        <Switch>
            <Route path="/about" component={ Aboutpage }></Route>
        </Switch>
    )
}

export default About;