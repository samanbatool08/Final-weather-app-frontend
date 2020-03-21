import React from 'react';

const ActivityShow = (props) => {
    // console.log('activityshow', props.activities.results[0].opening_hours.open_now)

    // console.log('restaurant data', props.activities.results.slice(0,5))
    // console.log('photo', props.activities)
    // console.log('photoref', props.activities.results[0].photos.map(photo => {
    //     return photo.photo_reference
    // }))


    return (
        <div className="activites">

         <h1>Showing {props.type} near you</h1>
        {props.activities.results.length !== 0 ? 
         props.activities.results.slice(0,5).map(activity => {
            //  console.log('in map', activity.opening_hours.open_now)
             return (
                 <div>
                     <h1>{activity.name}</h1>
                     <p>Address: {activity.vicinity}</p>
                     {activity.opening_hours ? activity.opening_hours.open_now && <p>Open: Yes</p> : <p>Open: Information not available</p>}
                     {/* <p>Get There: {activity.photos ? activity.photos[0].html_attributions[0] : <p>No directions at this time</p>}</p> */}
                     {activity.photos ? <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${activity.photos[0].photo_reference}&key=AIzaSyBeZSj15N3z9iD0tqyGFcxTqiUW8HqfeZk`} /> : <p>no photo available</p>}
                     
                     <button>Add to my activities</button>
                     </div>
             )
             }) : <p>Sorry!</p> }
        </div>
        )
    }

export default ActivityShow;