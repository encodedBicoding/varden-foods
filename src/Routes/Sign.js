import React from "react";
import { Route, Switch } from 'react-router-dom';
import Signup from '../Views/Signup'

const SignForms = () => {
    return (
        <Switch>
            <Route path="/signup" exact component={ Signup }></Route>
        </Switch>
    )
}

export default SignForms;