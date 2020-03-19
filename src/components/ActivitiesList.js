import React from 'react'; 
import RestaurantShow from './RestaurantShow';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PlacesAutoComplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'; 

const ActivitiesList = (props) => {

    const [address, setAddress] = React.useState("")
    const [coordinates, setCoordinates] = React.useState({
        lat: null,
        lng: null
    })
  

    const handleSelect = async (value) => { 
        const result = await geocodeByAddress(value)
        const latLng = await getLatLng(result[0])
        setAddress(value)
        setCoordinates(latLng)
    }
    // state = {
    //     nearbyRestaurants: [],
    //     userActitivities: []
    // }

    // getRestaurants = () => {
    //     const Zomato = require('zomato.js');
    //     const z = new Zomato('7a8cbeadc0d0ac16a478adc2a8517ca5');
    //     z
    //     .search({
    //         lat: this.props.latitude,
    //         lon: this.props.longitude,
    //         // radius: 5,
    //         count: 5
    //       })
    //     .then((nearbyRestaurants) => {
    //         this.setState({nearbyRestaurants}) 
    //         console.log('second', this.state.nearbyRestaurants)
    //       })
    //       .catch(function(err) {
    //         console.error(err);
    //       });

    // }


    // postActivity = () => {
    //     fetch(`http://localhost:3000/activities`,{
    //     method: "POST",
    //     headers: {'content-type': 'application/json',
    //             accepts: 'application/json'},
    //     body: JSON.stringify({
    //         location: this.props.city,
    //         name: "restaurant",
    //         date: this.props.todaysDate,
    //         info: "cuisine here"
    //     })}
    //     )
    //     .then(resp => resp.json())
    //     .then(newActivity => {
    //         this.setState({userActitivities: [...this.state.userActitivities, newActivity]})
    //     })
    // }
    
    

        // const url = "https://example.com"; // site that doesn’t send Access-Control-*
        // fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
        // .then(response => response.text())
        // .then(contents => console.log(contents))
        // .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
        
        // let today = new Date('05 October 2011 14:48 UTC');
        // let ISO = today.toISOString()
        // const proxyurl = "https://cors-anywhere.herokuapp.com/";
        // const url = "https://api-gate2.movieglu.com/cinemasNearby/?n=5";
        // const fetchURL = (proxyurl + url)

        // const options = {
        //     method: 'GET',
        //     headers: {
        //         client: "FLAT_3",
        //         "x-api-key": "DrvxcsYlMQ1e7aHLTwi7NBLOcStOGkN5tPw3V946",
        //         "authorization": "Basic RkxBVF8zOklaRmxZeVU2TVFNNw==",
        //         "api-version": "v200",
        //         "territory": "US",
        //         "geolocation": `${40.592091};${-73.582619}`,
        //         "device-datetime": `${ISO}`	
        //         }
        // };
     

        //     fetch(fetchURL, options)        
        //     .then( res => res.json())
        //     .then( data => console.log('movies', data))
            // .catch(() => console.log("Can't access " + url + " response. Blocked by browser?"))
    

        // $.ajax({
        //     type: "GET",
        //     url: "https://api-gate2.movieglu.com/cinemasNearby/?n=5",
        //     data: {
        //         client: "FLAT_3",
        //         x-api-key: "DrvxcsYlMQ1e7aHLTwi7NBLOcStOGkN5tPw3V946"
        //         "authorization: Basic RkxBVF8zOklaRmxZeVU2TVFNNw=="
        //         "territory: US"
        //         `geolocation: ${this.props.latitude};${this.props.longitude}`
        //         `device-datetime: ${ISO}`	
        //     },
        //     success: function(data) {
        //       console.log(data);
        //       //do something when request is successfull
        //     },
        //     dataType: "json"
        //   });

    // console.log('in activities', (((this.props.temperature) - 273.15) * 9/5 +32))
    // console.log('in activities', this.props.latitude)
    // console.log('in activities', this.props.longitude)
    // console.log('first', this.state.nearbyRestaurants)

    
    // const temp = (((this.props.temperature) - 273.15) * 9/5 +32)

    return(
        <div>
            <PlacesAutoComplete 
                value={address} 
                onChange={setAddress} 
                onSelect={handleSelect}> 
                {({getInputProps, suggestions, getSuggestionItemProps, loading}) => 
                (<div>
                    <p>Latitude: {coordinates.lat}</p>
                    <p>Longitude: {coordinates.lng}</p>

                    <input {...getInputProps({placeholder: "Type Address"})} />
                    <div>
                        {loading ? <div>...loading</div> : null}

                        {suggestions.map((suggestion) => {
                            const style = {
                                backgroundColor: suggestion.active ? "#fff" :null
                            }
                            return <div {...getSuggestionItemProps(suggestion, {style})}>{suggestion.description}</div>
                        })}
                    </div>
                </div>)}

            </PlacesAutoComplete>
        </div>
        // <div>
        // {(temp <= 50) ?
        //     <div className="activity__list">
        //     <div className="activity__list__header">
        //         <h1>Indoor Activities List</h1>
        //     </div>
        //         <div className="indoor">
        //             <h2 onClick={() => this.getRestaurants()}>Restaurants near you</h2>
        //             {(this.state.nearbyRestaurants.length !== 0) ? <RestaurantShow nearbyRestaurants={this.state.nearbyRestaurants} userActitivities={this.state.userActitivities} 
        //             postActivity={this.postActivity} /> :  
        //             <div>
        //             <h2>Movies near you</h2>
        
        //             <h2>Indoor Sport & Fitness Centers near you</h2>
        //             </div>
        //             }  
        //         </div>
        //     </div>
        //     :
        //     <div className="activity__list">
        //     <div className="activity__list__header">
        //         <h1>Outdoor Activities List</h1>
        //     </div>
        //         <div className="outdoor">
        //             <h2>Parks & Recreation near you</h2>

        //             <h2>Fishing/Camping near you</h2>

        //             <h2>Beaches near you</h2>
                
        //         </div>
        //         <h3></h3>
        //     </div>
        //     }
        // </div>
    )
    }


export default ActivitiesList;

