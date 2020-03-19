import React from 'react';

const Weather = (props) => {
    console.log(props.tomorrowMorningDescription)
        return (
            <div className="weather__info">
                {/* {props.todaysDate && <h3>Date: {(props.todaysDate).slice(0, 10)}</h3>}
                {props.city && props.state && <p>Location: {props.city}, {props.state}</p>}
                {props.temperature && <p>Temperature: {(((props.temperature) - 273.15) * 9/5 +32).toFixed(2)} degrees Farenheit</p>}
                {props.humidity && <p>Humidity: {props.humidity}</p>}
                {props.description && <p>Conditions: {props.description}</p>}
                {props.error && <p style={{ color: 'red'}}>{props.error}</p>} */}
                <div className="day__weather">
                    {props.tomorrowsDate && <h3>Tomorrow's Date: {(props.tomorrowsDate).slice(0, 10)}</h3>}
                    {props.tomorrowMorningTemperature && <p>Tomorrow Morning Temperature: {(((props.tomorrowMorningTemperature) - 273.15) * 9/5 +32).toFixed(2)} degrees Farenheit</p>}
                    {props.tomorrowMorningHumidity && <p>Tomorrow Morning Humidity: {props.tomorrowMorningHumidity}</p>}
                    {props.tomorrowMorningDescription && <p>Tomorrow Morning Conditions: {props.tomorrowMorningDescription}</p>}
                    <br />
                    {props.tomorrowEveningTemperature && <p>Tomorrow Evening Temperature: {(((props.tomorrowEveningTemperature) - 273.15) * 9/5 +32).toFixed(2)} degrees Farenheit</p>}
                    {props.tomorrowEveningHumidity && <p>Tomorrow Evening Humidity: {props.tomorrowEveningHumidity}</p>}
                    {props.tomorrowEveningDescription && <p>Tomorrow Evening Conditions: {props.tomorrowEveningDescription}</p>}
                </div>

                <div className="day__weather">
                    {props.twoDaysFromNowDate && <h3>Date: {(props.twoDaysFromNowDate).slice(0, 10)}</h3>}
                    {props.twoDayMorningTemperature && <p>Morning Temperature: {(((props.twoDayMorningTemperature) - 273.15) * 9/5 +32).toFixed(2)} degrees Farenheit</p>}
                    {props.twoDayMorningHumidity && <p>Morning Humidity: {props.twoDayMorningHumidity}</p>}
                    {props.twoDayMorningDescription && <p>Morning Conditions: {props.twoDayMorningDescription}</p>}
                    <br />
                    {props.twoDayEveningTemperature && <p>Evening Temperature: {(((props.twoDayEveningTemperature) - 273.15) * 9/5 +32).toFixed(2)} degrees Farenheit</p>}
                    {props.twoDayEveningHumidity && <p>Evening Humidity: {props.twoDayEveningHumidity}</p>}
                    {props.twoDayEveningDescription && <p>Evening Conditions: {props.twoDayEveningDescription}</p>}
                </div>

                <div className="day__weather">
                    {props.threeDaysFromNowDate && <h3>Date: {(props.threeDaysFromNowDate).slice(0, 10)}</h3>}
                    {props.threeDayMorningTemperature && <p>Morning Temperature: {(((props.threeDayMorningTemperature) - 273.15) * 9/5 +32).toFixed(2)} degrees Farenheit</p>}
                    {props.threeDayMorningHumidity && <p>Morning Humidity: {props.threeDayMorningHumidity}</p>}
                    {props.threeDayMorningDescription && <p>Morning Conditions: {props.threeDayMorningDescription}</p>}
                    <br />
                    {props.threeDayEveningTemperature && <p>Evening Temperature: {(((props.threeDayEveningTemperature) - 273.15) * 9/5 +32).toFixed(2)} degrees Farenheit</p>}
                    {props.threeDayEveningHumidity && <p>Evening Humidity: {props.threeDayEveningHumidity}</p>}
                    {props.threeDayEveningDescription && <p>Evening Conditions: {props.threeDayEveningDescription}</p>}
                </div>

                <div className="day__weather">
                    {props.fourDaysFromNowDate && <h3>Date: {(props.fourDaysFromNowDate).slice(0, 10)}</h3>}
                    {props.fourDayMorningTemperature && <p>Morning Temperature: {(((props.fourDayMorningTemperature) - 273.15) * 9/5 +32).toFixed(2)} degrees Farenheit</p>}
                    {props.fourDayMorningHumidity && <p>Morning Humidity: {props.fourDayMorningHumidity}</p>}
                    {props.fourDayMorningDescription && <p>Morning Conditions: {props.fourDayMorningDescription}</p>}
                    <br />
                    {props.fourDayEveningTemperature && <p>Evening Temperature: {(((props.fourDayEveningTemperature) - 273.15) * 9/5 +32).toFixed(2)} degrees Farenheit</p>}
                    {props.fourDayEveningHumidity && <p>Evening Humidity: {props.fourDayEveningHumidity}</p>}
                    {props.fourDayEveningDescription && <p>Evening Conditions: {props.fourDayEveningDescription}</p>}
                </div>

                <div className="day__weather">
                    {props.fiveDaysFromNowDate && <h3>Date: {(props.fiveDaysFromNowDate).slice(0, 10)}</h3>}
                    {props.fiveDayMorningTemperature && <p>Morning Temperature: {(((props.fiveDayMorningTemperature) - 273.15) * 9/5 +32).toFixed(2)} degrees Farenheit</p>}
                    {props.fiveDayMorningHumidity && <p>Morning Humidity: {props.fiveDayMorningHumidity}</p>}
                    {props.fiveDayMorningDescription && <p>Morning Conditions: {props.fiveDayMorningDescription}</p>}
                    <br />
                    {props.fiveDayEveningTemperature && <p>Evening Temperature: {(((props.fiveDayEveningTemperature) - 273.15) * 9/5 +32).toFixed(2)} degrees Farenheit</p>}
                    {props.fiveDayEveningHumidity && <p>Evening Humidity: {props.fiveDayEveningHumidity}</p>}
                    {props.fiveDayEveningDescription && <p>Evening Conditions: {props.fiveDayEveningDescription}</p>}
                </div>

                

            </div>
        )
    }


export default Weather;