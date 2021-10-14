import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ExercisesContainer from '../pages/ExercisesContainer.js';
import ExercisesNewContainer from '../pages/ExercisesNewContainer.js';
import Error400 from '../pages/Error400.js';

const App = () => (
    <BrowserRouter>
        <Switch>
        <Route exact path="/exercises" component={ExercisesContainer} />
        <Route exact path="/exercises/new" component={ExercisesNewContainer} />
        <Route component={Error400}/>
        </Switch>
    </BrowserRouter>
);



export default App;