import React from 'react';
import { Route, Link } from 'react-router-dom';


const ActivityShow = (props) => {

    const addActivity = (activity) => {
        fetch('http://localhost:3000/activities', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                accepts: 'application/json'
            },
            body: JSON.stringify({
                location: activity.vicinity,
                name: activity.name,
                date: props.date,
                info: props.type
            })
        })
        .then(resp => resp.json())
        .then(addedActivity => {
            fetch('http://localhost:3000/user_activities', {
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                    accepts: 'application/json'
                },
                body: JSON.stringify({
                    user_id: props.userId,
                    activity_id: addedActivity.id
                })
            })
            .then(resp => resp.json())
            .then(ua => {
                props.addUserActivity(ua)
        })
        })
    }



    return (
        <div>

         <h1 className="title-container__subtitle" style={{color: '#f16051', textAlign: 'center', fontSize: '16px'}}>Showing {props.type} near you</h1>
        <div className="activity___info">
            <div className={props.activitiesButton ? "scrollStyle" : "scrollStyleSmall"} style={{textAlign: 'center'}}>
        {props.activities.results.length !== 0 ? 
         props.activities.results.map((activity, index) => {
             return (
                
                     <div className="activity__show">
                      
                     <h3 style={{color: '#f16051', textAlign: 'center'}}>{activity.name}</h3>
                     <p style={{color: '#fff', textAlign: 'center'}}>Address: {activity.vicinity}</p>
                     {activity.opening_hours ? activity.opening_hours.open_now && <p style={{color: '#fff', textAlign: 'center'}}>Open: Yes</p> : <p style={{color: '#fff', textAlign: 'center'}}>Open: Information not available</p>}
                     {activity.photos ? <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${activity.photos[0].photo_reference}&key=AIzaSyBeZSj15N3z9iD0tqyGFcxTqiUW8HqfeZk`} style={{height: '263px', width: '400px'}}/> : <p style={{color: '#fff', textAlign: 'center'}}>no photo available</p>}
                     <br />
                    <div className="customAlign">
                     <button style={{padding: '4px 5px'}} onClick={() => addActivity(activity)}>✓ Save Activity</button>
                     </div>
                     </div>
                     
             )
            }) : <p className="title-container__subtitle" style={{color: '#f16051', textAlign: 'center', fontSize: '16px'}}>Sorry, no {props.type} can be found near you atm. Be sure to check out other activities!</p> }
            </div>
            <br />
        </div>
        </div>
        )
    }

export default ActivityShow;