import React from 'react';
import { Route, Link } from 'react-router-dom';


const UserActivities = (props) => {
    console.log(props.userActivities)
    return (
        <div>
                {props.userActivities.length !== 0 ? <h1 className="title-container__subtitle" style={{color: '#f16051', textAlign: 'center', fontSize: '16px'}}>Your upcoming activities!</h1> : 
                <h1 className="title-container__subtitle" style={{color: '#f16051', textAlign: 'center', fontSize: '16px'}}>Add upcoming activities!</h1>}
                <div className="scrollStyle__user">
            {props.userActivities.map(activity => {
                return (
                    
                    <div className="userActivities">
                        <h1 style={{color: '#fff', fontSize: '16px'}}>{activity.name}</h1>
                        <p style={{color: '#fff', fontSize: '16px'}}>{activity.type}</p>   
                        <p style={{color: '#fff', fontSize: '16px'}}>{activity.location}</p>
                        <p style={{color: '#fff', fontSize: '16px', fontWeight: 'bold'}}>Added: {activity.date}</p>
                        <div className="rightAlign">
                        <button onClick={() => props.deleteActivity(activity.id)}>Visited</button>
                        </div>
                        </div>
                    
                        
                )
            })}
            </div>
            <Link to="/activities"><button id="positionBottom">Back to All Activities</button></Link>
            </div>
        )
    }

export default UserActivities;