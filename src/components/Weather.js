import React from 'react';

const Weather = (props) => {

    return (
        <div className="weather__info">
            {props.error && <p style={{ color: 'red', fontSize: '16px'}}>{props.error}</p>}
        
            <div className="day__weather" >
                {props.tomorrowsDate && <h3 style={{color: '#f16051', textAlign: 'center'}}>Tomorrow </h3>}<br />
                {props.tomorrowMorningTemperature && <div style={{fontSize: '16px'}}><span style={{fontWeight: 'bold'}}>Morning: </span> <span>{(((props.tomorrowMorningTemperature) - 273.15) * 9/5 +32).toFixed(2)} ℉</span></div>}<br />
                {props.tomorrowMorningHumidity && <div><span>Humidity: </span> <span>{props.tomorrowMorningHumidity}</span></div>}
                {props.tomorrowMorningDescription && <div><span>Conditions: </span><br /> <span>{props.tomorrowMorningDescription}</span></div>}
                <br />
                {props.tomorrowEveningTemperature && <div style={{fontSize: '16px'}}><span style={{fontWeight: 'bold'}}>Evening: </span> <span>{(((props.tomorrowEveningTemperature) - 273.15) * 9/5 +32).toFixed(2)} ℉</span></div>}<br />
                {props.tomorrowEveningHumidity && <div><span>Humidity: </span> <span>{props.tomorrowEveningHumidity}</span></div>}
                {props.tomorrowEveningDescription && <div><span>Conditions: </span><br /> <span>{props.tomorrowEveningDescription}</span></div>}
            </div>

            <div className="day__weather" >
                {props.twoDaysFromNowDate && <h3 style={{color: '#f16051', textAlign: 'center'}}>Saturday</h3>}<br />
                {props.twoDayMorningTemperature && <div style={{fontSize: '16px'}}><span style={{fontWeight: 'bold'}}>Morning: </span> <span>{(((props.twoDayMorningTemperature) - 273.15) * 9/5 +32).toFixed(2)} ℉</span></div>}<br />
                {props.twoDayMorningHumidity && <div><span>Humidity: </span> <span>{props.twoDayMorningHumidity}</span></div>}
                {props.twoDayMorningDescription && <div><span>Conditions: </span> <span>{props.twoDayMorningDescription}</span></div>}
                <br />
                {props.twoDayEveningTemperature && <div style={{fontSize: '16px'}}><span style={{fontWeight: 'bold'}}>Evening: </span> <span>{(((props.twoDayEveningTemperature) - 273.15) * 9/5 +32).toFixed(2)} ℉</span></div>}<br />
                {props.twoDayEveningHumidity && <div><span>Humidity: </span> <span>{props.twoDayEveningHumidity}</span></div>}
                {props.twoDayEveningDescription && <div><span>Conditions: </span> <span>{props.twoDayEveningDescription}</span></div>}
            </div>

            <div className="day__weather" >
                {props.threeDaysFromNowDate && <h3 style={{color: '#f16051', textAlign: 'center'}}>Sunday</h3>}<br />
                {props.threeDayMorningTemperature && <div style={{fontSize: '16px'}}><span style={{fontWeight: 'bold'}}>Morning: </span> <span>{(((props.threeDayMorningTemperature) - 273.15) * 9/5 +32).toFixed(2)} ℉</span></div>}<br />
                {props.threeDayMorningHumidity && <div><span>Humidity: </span> <span>{props.threeDayMorningHumidity}</span></div>}
                {props.threeDayMorningDescription && <div><span>Conditions: </span> <span>{props.threeDayMorningDescription}</span></div>}
                <br />
                {props.threeDayEveningTemperature && <div style={{fontSize: '16px'}}><span style={{fontWeight: 'bold'}}>Evening: </span> <span>{(((props.threeDayEveningTemperature) - 273.15) * 9/5 +32).toFixed(2)} ℉</span></div>}<br />
                {props.threeDayEveningHumidity && <div><span>Humidity: </span> <span>{props.threeDayEveningHumidity}</span></div>}
                {props.threeDayEveningDescription && <div><span>Conditions: </span> <span>{props.threeDayEveningDescription}</span></div>}
            </div>
            
            <div className="day__weather" >
                {props.fourDaysFromNowDate && <h3 style={{color: '#f16051', textAlign: 'center'}}>Monday</h3>}<br />
                {props.fourDayMorningTemperature && <div style={{fontSize: '16px'}}><span style={{fontWeight: 'bold'}}>Morning: </span> <span>{(((props.fourDayMorningTemperature) - 273.15) * 9/5 +32).toFixed(2)} ℉</span></div>}<br />
                {props.fourDayMorningHumidity && <div><span>Humidity: </span> <span>{props.fourDayMorningHumidity}</span></div>}
                {props.fourDayMorningDescription && <div><span>Conditions: </span> <span>{props.fourDayMorningDescription}</span></div>}
                <br />
                {props.fourDayEveningTemperature && <div style={{fontSize: '16px'}}><span style={{fontWeight: 'bold'}}>Evening: </span> <span>{(((props.fourDayEveningTemperature) - 273.15) * 9/5 +32).toFixed(2)} ℉</span></div>}<br />
                {props.fourDayEveningHumidity && <div><span>Humidity: </span> <span>{props.fourDayEveningHumidity}</span></div>}
                {props.fourDayEveningDescription && <div><span>Conditions: </span> <span>{props.fourDayEveningDescription}</span></div>}
            </div>

            <div className="day__weather" >
                {props.fiveDaysFromNowDate && <h3 style={{color: '#f16051', textAlign: 'center'}}>Tuesday</h3>}<br />
                {props.fiveDayMorningTemperature && <div style={{fontSize: '16px'}}><span style={{fontWeight: 'bold'}}>Morning: </span> <span>{(((props.fiveDayMorningTemperature) - 273.15) * 9/5 +32).toFixed(2)} ℉</span></div>}<br />
                {props.fiveDayMorningHumidity && <div><span>Humidity: </span> <span>{props.fiveDayMorningHumidity}</span></div>}
                {props.fiveDayMorningDescription && <div><span>Conditions: </span> <span>{props.fiveDayMorningDescription}</span></div>}
                <br />
                {props.fiveDayEveningTemperature && <div style={{fontSize: '16px'}}><span style={{fontWeight: 'bold'}}>Evening: </span> <span>{(((props.fiveDayEveningTemperature) - 273.15) * 9/5 +32).toFixed(2)} ℉</span></div>}<br />
                {props.fiveDayEveningHumidity && <div><span>Humidity: </span> <span>{props.fiveDayEveningHumidity}</span></div>}
                {props.fiveDayEveningDescription && <div><span>Conditions: </span> <span>{props.fiveDayEveningDescription}</span></div>}
            </div>
        </div>
    )
}


export default Weather;