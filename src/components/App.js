import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Exercises from '../pages/Exercises.js';
import ExercisesNew from '../pages/ExercisesNew.js';
import Error400 from '../pages/Error400.js';

const App = () => (
    <BrowserRouter>
        <Switch>
        <Route exact path="/exercises" component={Exercises} />
        <Route exact path="/exercises/new" component={ExercisesNew} />
        <Route component={Error400}/>
        </Switch>
    </BrowserRouter>
);



export default App;