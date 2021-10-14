import React from 'react';
import ExerciseForm from '../components/exerciseForm.js';
import Card from '../components/Card.js';

const ExercisesNew = ({form, onChange, onSubmit}) =>(
    <div className="row">
        <div className="col-sm">
            <Card {...form}/>
        </div>
        <div className="col-sm">
            <ExerciseForm
                onChange={onChange}
                onSubmit={onSubmit}
                form={form}
            />
        </div>
    </div>
);

export default ExercisesNew;