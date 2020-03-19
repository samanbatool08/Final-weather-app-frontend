import React from 'react';

const RestaurantShow = (props) => {
    console.log('in restshow', props.nearbyRestaurants)
    console.log('in restshow', props.postActivity)


    
        return (
        <div>
            <div className='main-body'>
                <div className='outer'>
                    <div className='inner'>
                    <h3>Nearby Restaurants</h3>
                    <div>
                        {props.nearbyRestaurants.restaurants.map((restaurantObj, index) => {
                            return (
                                <div className="row" key={index}>
                                    <div className="column column-25"> 
                                        <img src={restaurantObj.thumb} />
                                    </div>
                                    <div classNamee="column">
                                        <h3>{restaurantObj.name}</h3>
                                        <b>Address:</b> {restaurantObj.location.address} <br />
                                        <b>Cuisines:</b> {restaurantObj.cuisines} <br />
                                        <b>Cost for two (approx):</b> {restaurantObj.currency} {restaurantObj.average_cost_for_two}<br />
                                        <b>Ratings: <span style={{color: '#' + restaurantObj.user_rating.rating_color}}> {restaurantObj.user_rating.aggregate_rating}</span></b> 
                                        <button onClick={() => props.postActivity()}>Maybe?</button>
                                    </div>
                                </div>
                            )
                        } 
                        )}
                    </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }

export default RestaurantShow;