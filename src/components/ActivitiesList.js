import React from 'react'; 
import ActivityShow from './ActivityShow';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PlacesAutoComplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'; 

class ActivitiesList extends React.Component {

    state = { 
        // nearby: {}


        // nearbyRestaurants: [],
        // nearbyMuseums: [], 
        // nearbyGyms: [],
        // nearbyLibraries: [],
        // nearbyBowling: [],
        // nearbyMovies: [],
        // nearbyParks: [],
        // nearbyBars: [],
        // nearbyCafes: []

        activities: [],
        key: ""
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
            this.setState({activities: nearbyRestaurants, 
                            type: "restaurants"})
        })
    }

    const getMuseums = () => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.props.latitude},${this.props.longitude}&radius=500&type=museum&key=${PLACES_KEY}`
        fetch(proxyurl + url)
        .then(resp => resp.json())
        .then((nearbyMuseums) => {
            console.log('nearbyMuseums', nearbyMuseums)
            this.setState({activities: nearbyMuseums,
                            type: "museums"})
        })
    }

    const getGyms = () => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.props.latitude},${this.props.longitude}&radius=500&type=gym&key=${PLACES_KEY}`
        fetch(proxyurl + url)
        .then(resp => resp.json())
        .then((nearbyGyms) => {
            console.log('nearbyGyms', nearbyGyms)
            this.setState({activities: nearbyGyms,
                            type: "gyms"})
        })
    }

    const getLibraries = () => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.props.latitude},${this.props.longitude}&radius=500&type=library&key=${PLACES_KEY}`
        fetch(proxyurl + url)
        .then(resp => resp.json())
        .then((nearbyLibraries) => {
            console.log('nearbyLibraries', nearbyLibraries)
            this.setState({activities: nearbyLibraries,
                            type: "libraries"})
        })
    }
    

    const getBowling = () => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.props.latitude},${this.props.longitude}&radius=1500&type=bowling_alley&key=${PLACES_KEY}`
        fetch(proxyurl + url)
        .then(resp => resp.json())
        .then((nearbyBowling) => {
            console.log('nearbyBowling', nearbyBowling)
            this.setState({activities: nearbyBowling,
                            type: "bowling alleys"})
        })
    }

    const getMovies = () => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.props.latitude},${this.props.longitude}&radius=1500&type=movie_theater&key=${PLACES_KEY}`
        fetch(proxyurl + url)
        .then(resp => resp.json())
        .then((nearbyMovies) => {
            console.log('nearbyMovies', nearbyMovies)
            this.setState({activities: nearbyMovies,
                            type: "movies"})
        })
    }
    
    const getParks = () => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.props.latitude},${this.props.longitude}&radius=1500&type=park&key=${PLACES_KEY}`
        fetch(proxyurl + url)
        .then(resp => resp.json())
        .then((nearbyParks) => {
            console.log('nearbyParks', nearbyParks)
            this.setState({activities: nearbyParks,
                            type: "parks"})
        })
    }

    const getBars = () => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.props.latitude},${this.props.longitude}&radius=1500&type=bar&key=${PLACES_KEY}`
        fetch(proxyurl + url)
        .then(resp => resp.json())
        .then((nearbyBars) => {
            console.log('nearbyBars', nearbyBars)
            this.setState({activities: nearbyBars,
                            type: "bars"})
        })
    }
    

    const getCafes = () => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.props.latitude},${this.props.longitude}&radius=1500&type=cafe&key=${PLACES_KEY}`
        fetch(proxyurl + url)
        .then(resp => resp.json())
        .then((nearbyCafes) => {
            console.log('nearbyCafes', nearbyCafes)
            this.setState({activities: nearbyCafes,
                            type: "cafes"})
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
                    console.log('type', this.state.type)
                    
                    const temp = (((this.props.temperature) - 273.15) * 9/5 +32)
                    
                    return(
                        <div className="activites">
            <h2>Activities near you</h2>
            <p onClick={() => getRestaurants()}>Restaurants</p>

            <p onClick={() => getMuseums()}>Museums</p>

            <p onClick={() => getGyms()}>Gym</p>  

            <p onClick={() => getLibraries()}>Libraries</p>

            <p onClick={() => getBowling()}>Bowling</p>

            <p onClick={() => getMovies()}>Movies</p>

            <p onClick={() => getParks()}>Parks</p>

            <p onClick={() => getBars()}>Bars</p>

            <p onClick={() => getCafes()}>Cafes</p>
            {this.state.activities.length !==0 && <ActivityShow activities={this.state.activities} type={this.state.type}/>}

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