import React from 'react'; 
import RestaurantShow from './RestaurantShow';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PlacesAutoComplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'; 

class ActivitiesList extends React.Component {

    state = { 
        nearbyRestaurants: [],
        nearbyMuseums: [], 
        nearbyGyms: [],
        nearbyLibraries: [],
        nearbyBowling: [],
        nearbyMovies: [],
        nearbyParks: [],
        nearbyBars: [],
        nearbyCafes: []
    }

    render() {

        const PLACES_KEY = ""
    
    const getRestaurants = () => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.props.latitude},${this.props.longitude}&radius=500&type=restaurant&key=${PLACES_KEY}`
        fetch(proxyurl + url)
        .then(resp => resp.json())
        .then((nearbyRestaurants) => {
            console.log('nearbyrest', nearbyRestaurants)
            this.setState({nearbyRestaurants})
        })
    }

    const getMuseums = () => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.props.latitude},${this.props.longitude}&radius=500&type=museum&key=${PLACES_KEY}`
        fetch(proxyurl + url)
        .then(resp => resp.json())
        .then((nearbyMuseums) => {
            console.log('nearbyMuseums', nearbyMuseums)
            this.setState({nearbyMuseums})
        })
    }

    const getGyms = () => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.props.latitude},${this.props.longitude}&radius=500&type=gym&key=${PLACES_KEY}`
        fetch(proxyurl + url)
        .then(resp => resp.json())
        .then((nearbyGyms) => {
            console.log('nearbyGyms', nearbyGyms)
            this.setState({nearbyGyms})
        })
    }

    const getLibraries = () => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.props.latitude},${this.props.longitude}&radius=500&type=library&key=${PLACES_KEY}`
        fetch(proxyurl + url)
        .then(resp => resp.json())
        .then((nearbyLibraries) => {
            console.log('nearbyLibraries', nearbyLibraries)
            this.setState({nearbyLibraries})
        })
    }
    

    const getBowling = () => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.props.latitude},${this.props.longitude}&radius=1500&type=bowling_alley&key=${PLACES_KEY}`
        fetch(proxyurl + url)
        .then(resp => resp.json())
        .then((nearbyBowling) => {
            console.log('nearbyBowling', nearbyBowling)
            this.setState({nearbyBowling})
        })
    }

    const getMovies = () => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.props.latitude},${this.props.longitude}&radius=1500&type=movie_theater&key=${PLACES_KEY}`
        fetch(proxyurl + url)
        .then(resp => resp.json())
        .then((nearbyMovies) => {
            console.log('nearbyMovies', nearbyMovies)
            this.setState({nearbyMovies})
        })
    }
    
    const getParks = () => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.props.latitude},${this.props.longitude}&radius=1500&type=park&key=${PLACES_KEY}`
        fetch(proxyurl + url)
        .then(resp => resp.json())
        .then((nearbyParks) => {
            console.log('nearbyParks', nearbyParks)
            this.setState({nearbyParks})
        })
    }

    const getBars = () => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.props.latitude},${this.props.longitude}&radius=1500&type=bar&key=${PLACES_KEY}`
        fetch(proxyurl + url)
        .then(resp => resp.json())
        .then((nearbyBars) => {
            console.log('nearbyBars', nearbyBars)
            this.setState({nearbyBars})
        })
    }
    

    const getCafes = () => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.props.latitude},${this.props.longitude}&radius=1500&type=cafe&key=${PLACES_KEY}`
        fetch(proxyurl + url)
        .then(resp => resp.json())
        .then((nearbyCafes) => {
            console.log('nearbyCafes', nearbyCafes)
            this.setState({nearbyCafes})
        })
    }


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
                    
                    
                    
                    
                    
                    console.log('in activities', (((this.props.temperature) - 273.15) * 9/5 +32))
                    console.log('in activities', this.props.latitude)
                    console.log('in activities', this.props.longitude)
                    
                    
                    const temp = (((this.props.temperature) - 273.15) * 9/5 +32)
                    
                    return(
                        <div>
            <h2>Activities near you</h2>
            <p onClick={() => getRestaurants()}>Restaurants</p>
            {this.state.nearbyRestaurants.length !== 0 && <RestaurantShow />}

            <p onClick={() => getMuseums()}>Museums</p>
            {this.state.nearbyMuseums.length !== 0 && <RestaurantShow />}

            <p onClick={() => getGyms()}>Gym</p>

            <p onClick={() => getLibraries()}>Libraries</p>

            <p onClick={() => getBowling()}>Bowling</p>

            <p onClick={() => getMovies()}>Movies</p>

            <p onClick={() => getParks()}>Parks</p>

            <p onClick={() => getBars()}>Bars</p>

            <p onClick={() => getCafes()}>Cafes</p>

        </div>
    
    )
}
}


export default ActivitiesList;


{/* 
    // const [address, setAddress] = React.useState("")
    // const [coordinates, setCoordinates] = React.useState({
    //     lat: null,
    //     lng: null
    // })
    
    
    // const handleSelect = async (value) => { 
    //     const result = await geocodeByAddress(value)
    //     const latLng = await getLatLng(result[0])
    //     setAddress(value)
    //     setCoordinates(latLng)
    // }







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
                            console.log(suggestion)
                            const style = {
                                backgroundColor: suggestion.active ? "#fff" :null
                            }
                            return <div {...getSuggestionItemProps(suggestion, {style})}>{suggestion.description}</div>
                        })}
                    </div>
                </div>)}

            </PlacesAutoComplete> */}