import React from 'react';
import { Route, Link } from 'react-router-dom';


const Form = (props) => {
        return (
            <div>
            <form onSubmit={props.getWeather}>
                <input type="text" name="city" placeholder="City" />
                <input type="text" name="state" placeholder="State/Country" />
                <button>Get Weather</button>
            </form>
            </div>
        )
    }

export default Form;