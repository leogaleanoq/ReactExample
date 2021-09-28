import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Exercises from '../pages/Exercises.js';
import ExercisesNew from '../pages/ExercisesNew.js';
import NotFound from '../pages/NotFound.js';

function App(){
    return(
        <BrowserRouter>
            <Switch>
            <Route exact path="/exercises" component={Exercises} />
            <Route exact path="/exercises/new" component={ExercisesNew} />
            <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
};

export default App;