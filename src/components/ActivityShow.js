import React from 'react';
import { Route, Link } from 'react-router-dom';
import ActivityItem from './ActivityItem';



const ActivityShow = (props) => {

    const addActivity = (activity) => {
        fetch('https://weatheryoushouldgo-app-api.herokuapp.com/activities', {
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
            fetch('https://weatheryoushouldgo-app-api.herokuapp.com/user_activities', {
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
         props.activities.results.map((activity) => {
             return (
                 
                 <div className="activity__show">
                 <ActivityItem activity={activity} addActivity={addActivity}/>
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