import React from 'react';

import Titles from './components/Titles';
import Form from './components/Form'
import Weather from './components/Weather'


const API_KEY = "c464dbd6a0a531bfe5beedbb84bb9f0e";

class App extends React.Component {

  state = {
    todaysDate: "",
    temperature: undefined,
    city: undefined,
    state: undefined, 
    humidity: undefined, 
    description: undefined,
    
    tomorrowsDate: "",
    tomorrowMorningTemperature: undefined,
    tomorrowMorningHumidity: undefined, 
    tomorrowMorningdescription: undefined,
    tomorrowEveningTemperature: undefined,
    tomorrowEveningHumidity: undefined, 
    tomorrowEveningDescription: undefined,

    twoDaysFromNowDate: "",
    twoDayMorningTemperature: undefined,
    twoDayMorningHumidity: undefined, 
    twoDayMorningDescription: undefined,
    twoDayEveningTemperature: undefined,
    twoDayEveningHumidity: undefined, 
    twoDayEveningDescription: undefined,

    threeDaysFromNowDate: "",
    threeDayMorningTemperature: undefined,
    threeDayMorningHumidity: undefined, 
    threeDayMorningDescription: undefined,
    threeDayEveningTemperature: undefined,
    threeDayEveningHumidity: undefined, 
    threeDayEveningDescription: undefined,

    fourDaysFromNowDate: "",
    fourDayMorningTemperature: undefined,
    fourDayMorningHumidity: undefined, 
    fourDayMorningDescription: undefined,
    fourDayEveningTemperature: undefined,
    fourDayEveningHumidity: undefined, 
    fourDayEveningDescription: undefined,

    fiveDaysFromNowDate: "",
    fiveDayMorningTemperature: undefined,
    fiveDayMorningHumidity: undefined, 
    fiveDayMorningDescription: undefined,
    fiveDayEveningTemperature: undefined,
    fiveDayEveningHumidity: undefined, 
    fiveDayEveningDescription: undefined,

    error: ""
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value
    const state = e.target.elements.state.value
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${state}&appid=${API_KEY}&mode=json`)
    const data = await api_call.json()
    if (city && state) {
    console.log(data)
    this.setState({
      todaysDate: data.list[0].dt_txt,
      temperature: data.list[0].main.temp,
      city: data.city.name,
      state: data.city.country,
      humidity: data.list[0].main.humidity, 
      description: data.list[0].weather[0].description,

      tomorrowsDate: data.list[3].dt_txt,
      tomorrowMorningTemperature: data.list[3].main.temp,
      tomorrowMorningHumidity: data.list[3].main.humidity, 
      tomorrowMorningDescription: data.list[3].weather[0].description,
      tomorrowEveningTemperature: data.list[7].main.temp,
      tomorrowEveningHumidity: data.list[7].main.humidity, 
      tomorrowEveningDescription: data.list[7].weather[0].description,

      twoDaysFromNowDate: data.list[11].dt_txt,
      twoDayMorningTemperature: data.list[11].main.temp,
      twoDayMorningHumidity: data.list[11].main.humidity, 
      twoDayMorningDescription: data.list[11].weather[0].description,
      twoDayEveningTemperature: data.list[15].main.temp,
      twoDayEveningHumidity: data.list[15].main.humidity, 
      twoDayEveningDescription: data.list[15].weather[0].description,

      threeDaysFromNowDate: data.list[19].dt_txt,
      threeDayMorningTemperature: data.list[19].main.temp,
      threeDayMorningHumidity: data.list[19].main.humidity, 
      threeDayMorningDescription: data.list[19].weather[0].description,
      threeDayEveningTemperature: data.list[23].main.temp,
      threeDayEveningHumidity: data.list[23].main.humidity, 
      threeDayEveningDescription: data.list[23].weather[0].description,

      fourDaysFromNowDate: data.list[27].dt_txt,
      fourDayMorningTemperature: data.list[27].main.temp,
      fourDayMorningHumidity: data.list[27].main.humidity, 
      fourDayMorningDescription: data.list[27].weather[0].description,
      fourDayEveningTemperature: data.list[31].main.temp,
      fourDayEveningHumidity: data.list[31].main.humidity, 
      fourDayEveningDescription: data.list[31].weather[0].description,

      fiveDaysFromNowDate: data.list[35].dt_txt,
      fiveDayMorningTemperature: data.list[35].main.temp,
      fiveDayMorningHumidity: data.list[35].main.humidity, 
      fiveDayMorningDescription: data.list[35].weather[0].description,
      fiveDayEveningTemperature: data.list[39].main.temp,
      fiveDayEveningHumidity: data.list[39].main.humidity, 
      fiveDayEveningDescription: data.list[39].weather[0].description,

    error: ""
    })
  } else {
    this.setState({
      todaysDate: "",
      temperature: undefined,
      city: undefined,
      state: undefined,
      humidity: undefined, 
      description: undefined,

      tomorrowsDate: "",
      tomorrowMorningTemperature: undefined,
      tomorrowMorningHumidity: undefined, 
      tomorrowMorningdescription: undefined,
      tomorrowEveningTemperature: undefined,
      tomorrowEveningHumidity: undefined, 
      tomorrowEveningDescription: undefined,
      twoDaysFromNowDate: "",

      twoDayMorningTemperature: undefined,
      twoDayMorningHumidity: undefined, 
      twoDayMorningDescription: undefined,
      twoDayEveningTemperature: undefined,
      twoDayEveningHumidity: undefined, 
      twoDayEveningDescription: undefined,

      threeDaysFromNowDate: "",
      threeDayMorningTemperature: undefined,
      threeDayMorningHumidity: undefined, 
      threeDayMorningDescription: undefined,
      threeDayEveningTemperature: undefined,
      threeDayEveningHumidity: undefined, 
      threeDayEveningDescription: undefined,

      fourDaysFromNowDate: "",
      fourDayMorningTemperature: undefined,
      fourDayMorningHumidity: undefined, 
      fourDayMorningDescription: undefined,
      fourDayEveningTemperature: undefined,
      fourDayEveningHumidity: undefined, 
      fourDayEveningDescription: undefined,

      fiveDaysFromNowDate: "",
      fiveDayMorningTemperature: undefined,
      fiveDayMorningHumidity: undefined, 
      fiveDayMorningDescription: undefined,
      fiveDayEveningTemperature: undefined,
      fiveDayEveningHumidity: undefined, 
      fiveDayEveningDescription: undefined,


      error: "Please enter a value."
    })
  }
}





  render() {
    return(
      <div>
        <Titles />
        <Form 
        getWeather={this.getWeather}
        getWeeklyWeather={this.getWeeklyWeather}/>
        <Weather 
        todaysDate={this.state.todaysDate}
        temperature={this.state.temperature}
        city={this.state.city}
        state={this.state.state}
        humidity={this.state.humidity}
        description={this.state.description}

        tomorrowsDate={this.state.tomorrowsDate}
        tomorrowMorningTemperature={this.state.tomorrowMorningTemperature}
        tomorrowMorningHumidity={this.state.tomorrowMorningHumidity}
        tomorrowMorningDescription={this.state.tomorrowMorningDescription}
        tomorrowEveningTemperature={this.state.tomorrowEveningTemperature}
        tomorrowEveningHumidity={this.state.tomorrowEveningHumidity}
        tomorrowEveningDescription={this.state.tomorrowEveningDescription}

        twoDaysFromNowDate={this.state.twoDaysFromNowDate}
        twoDayMorningTemperature={this.state.twoDayMorningTemperature}
        twoDayMorningHumidity={this.state.twoDayMorningHumidity} 
        twoDayMorningDescription={this.state.twoDayMorningDescription}
        twoDayEveningTemperature={this.state.twoDayEveningTemperature}
        twoDayEveningHumidity={this.state.twoDayEveningHumidity} 
        twoDayEveningDescription={this.state.twoDayEveningDescription}

        threeDaysFromNowDate={this.state.threeDaysFromNowDate}
        threeDayMorningTemperature={this.state.threeDayMorningTemperature}
        threeDayMorningHumidity={this.state.threeDayMorningHumidity} 
        threeDayMorningDescription={this.state.threeDayMorningDescription}
        threeDayEveningTemperature={this.state.threeDayEveningTemperature}
        threeDayEveningHumidity={this.state.threeDayEveningHumidity} 
        threeDayEveningDescription={this.state.threeDayEveningDescription}

        fourDaysFromNowDate={this.state.fourDaysFromNowDate}
        fourDayMorningTemperature={this.state.fourDayMorningTemperature}
        fourDayMorningHumidity={this.state.fourDayMorningHumidity} 
        fourDayMorningDescription={this.state.fourDayMorningDescription}
        fourDayEveningTemperature={this.state.fourDayEveningTemperature}
        fourDayEveningHumidity={this.state.fourDayEveningHumidity} 
        fourDayEveningDescription={this.state.fourDayEveningDescription}

        fiveDaysFromNowDate={this.state.fiveDaysFromNowDate}
        fiveDayMorningTemperature={this.state.fiveDayMorningTemperature}
        fiveDayMorningHumidity={this.state.fiveDayMorningHumidity} 
        fiveDayMorningDescription={this.state.fiveDayMorningDescription}
        fiveDayEveningTemperature={this.state.fiveDayEveningTemperature}
        fiveDayEveningHumidity={this.state.fiveDayEveningHumidity} 
        fiveDayEveningDescription={this.state.fiveDayEveningDescription}

        error={this.state.error}
        />

      </div>
    )
  }

}


export default App;