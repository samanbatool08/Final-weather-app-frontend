import React from 'react';
import { Route, Link } from 'react-router-dom';


const Titles = (props) => {

    return(
        <div>
            <h1 className="title-container__title">Weather Finder</h1>
            <p className="title-container__subtitle">Find out temperature, conditions and more...</p>
                {props.todaysDate && <h2>Today's Weather</h2>}
                {props.todaysDate && <h3>Date: {props.todaysDate.slice(0,10)}</h3>}
                {props.city && props.state && <p>Location: {props.city}, {props.state}</p>}
        
                {props.temperature && <p>Temperature: {(((props.temperature) - 273.15) * 9/5 +32).toFixed(2)} degrees Farenheit</p>}
                {props.humidity && <p>Humidity: {props.humidity}</p>}
                {props.description && <p>Conditions: {props.description}</p>}

                {props.temperature && !props.userId && <Link to="/login"><button onClick={props.showActivities}>Activities near you</button></Link>}
                <br />
                <div className="loggedUserBar">
                <div>{props.userId && <Link to="/user/activities"><button>See all my saved activities</button></Link>}</div>
                <br />
                <div>{props.userId && <Link to="/weather"><button>Back to Weekly Weather</button></Link>}</div>
                <br />
                <div>{props.userId && <Link to="/weather"><button>Log Out</button></Link>}</div>
                </div>

  
        </div>
    )
    }



export default Titles;