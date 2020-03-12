import React from 'react';

const Weather = (props) => {
        return (
            <div>
                {props.city && props.state && <p>Location: {props.city}, {props.state}</p>}
        
                {/* {props.temperature && (Math.round((props.temperature)*9/5) +32).toFixed(2)} */}
                {props.temperature && <p>Temperature: {(((props.temperature)*9/5) +32).toFixed(2)}</p>}
                {props.humidity && <p>Humidity: {props.humidity}</p>}
                {props.description && <p>Conditions: {props.description}</p>}
                {props.error && <p style={{ color: 'red'}}>{props.error}</p>}
            </div>
        )
    }


export default Weather;