import React from 'react';

const UserActivities = (props) => {
    
    return (
        <div>
                <h1 className="title-container__subtitle" style={{color: '#f16051', textAlign: 'center', fontSize: '16px'}}>Your upcoming activities!</h1>
                <div className="scrollStyle__user">
            {props.userActivities.map(activity => {
                console.log('here', activity)
                return (
                    <div className="activities" style={{border: '5px solid rgba(241, 96, 81, .5)'}}>
                        <h1 style={{color: '#fff', fontSize: '16px'}}>{activity.name}</h1>
                        <p style={{color: '#fff', fontSize: '16px'}}>{activity.type}</p>
                        <p style={{color: '#fff', fontSize: '16px'}}>{activity.location}</p>
                        <p style={{color: '#fff', fontSize: '16px', fontWeight: 'bold'}}>Added: {activity.date}</p>
                        <button onClick={() => props.deleteActivity(activity.id)}>Visited</button>
                        </div>
                        
                )
            })}
            </div>
            </div>
        )
    }

export default UserActivities;