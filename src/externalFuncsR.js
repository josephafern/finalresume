import CloudsLightDay from './images/CloudsLightDay.svg';
import CloudsLightNight from './images/CloudsLightNight.svg';
import CloudsLight from './images/CloudsLight.svg';
import Snow from './images/Snowflake.svg';
import Drizzle from './images/Drizzle.svg';
import Clear from './images/Clear.svg';
import ClearNight from './images/ClearNight.svg'; 
import Thunderstorm from './images/Thunderstorm.svg';
import Thunder from './images/Thunder.svg';
import Rain from './images/Rain.svg';
import RainDrops from './images/RainDrops.svg';
import Clouds from './images/Clouds.svg';
import Wind from './images/Wind.svg';

export const findWeatherCode = (weatherCode, mainDescript, dayOrNight) => {
	var code = weatherCode;
	switch (code){
		case 'Snow':
			code = Snow;
			break;
		case 'Drizzle':
			code = Drizzle;
			break;
		case 'Clear':
			if (!dayOrNight){
				code = ClearNight;
			} else {
				code = Clear;
			}
			break;
		case 'Thunderstorm':
			switch (mainDescript){
				case 'thunderstorm':
				case 'light thunderstorm':
				case 'heavy thunderstorm':
				case 'ragged thunderstorm':
					code = Thunder;
				default:
					code = Thunderstorm;
			}
			break;
		case 'Rain':
			switch (mainDescript){
				case 'light rain':
				case 'light intensity shower rain':
				case 'shower rain':
				case 'ragged shower rain':
					code = Drizzle;
				default:
					code = Rain;
			}
			break;
		case 'Clouds':
			switch (mainDescript){
				case 'few clouds':
				case 'scattered clouds':
				case 'broken clouds':
					dayOrNight ? code = CloudsLightDay : code = CloudsLightNight;
					break;
				default:
					code = Clouds;
			}
			break;
		case 'Mist':
		case 'Smoke':
		case 'Haze':
		case 'Dust':
		case 'Fog':
		case 'Sand':
		case 'Dust':
		case 'Ash':
		case 'Squall':
		case 'Tornado':
			code = Wind;
			break;
	}
	return code;
}

export const dayOfWeek = (num) => {
	switch(num){
		case 0:
			return 'Sun';
		case 1:
			return 'Mon';
		case 2:
			return 'Tue';
		case 3:
			return 'Wed';
		case 4:
			return 'Thu'; 
		case 5:
			return 'Fri';
		case 6:
			return 'Sat';
		default:
			return '';
	}
}

export const fiveDayCode = (weather) => {
	switch(weather){
		case 'Clear':
			return Clear;
		case 'Clouds':
			return CloudsLight;
		case 'Drizzle':
		case 'Rain':
			return RainDrops;
		case 'Thunderstorm':
			return Thunder;
		case 'Snow':
			return Snow;
		default:
			return 'https://openweathermap.org/img/wn/50d.png';
	}
}

export const timeOfDay = (sunriseUnix, sunsetUnix, timezone) => {
	if (sunriseUnix!=='' && sunsetUnix!==''){
		const result = {
			sunrise: [],
			sunset: [],
			current: [],
			dayOrNight: false
		};
		var date = new Date();
		date.setTime((sunriseUnix + ((date.getTimezoneOffset() * 60) + timezone)) * 1000);
		result.sunrise.push(date.getHours(), date.getMinutes());
		date.setTime((sunsetUnix + ((date.getTimezoneOffset() * 60) + timezone)) * 1000);
		result.sunset.push(date.getHours(), date.getMinutes());
		date.setTime(Date.now() + ((date.getTimezoneOffset() * 60) + timezone) * 1000);
		result.current.push(date.getHours(), date.getMinutes());
		var timeSum = (date.getHours()*60) + date.getMinutes();
		var sunriseSum = (result.sunrise[0]*60)+result.sunrise[1];
		var sunsetSum = (result.sunset[0]*60)+result.sunrise[1];
		if (timeSum>=sunriseSum && timeSum<sunsetSum){
			result.dayOrNight = true;
		}
		result.sunset[0] -= 12;
		if (result.sunrise[1].toString().length===1){
			result.sunrise[1] = '0' + result.sunrise[1];
		}
		if (result.sunset[1].toString().length===1){
			result.sunset[1] = '0' + result.sunset[1];
		}
		if (result.current[1].toString().length===1){
			result.current[1] = '0' + result.current[1];
		}
		result.sunrise = result.sunrise.join(':');
		result.sunset = result.sunset.join(':');
		if (timeSum>=0 && timeSum<60){
			result.current[0] = 12;
			result.current = result.current.join(':') + 'AM';
		} else if (timeSum<720){
			result.current = result.current.join(':') + 'AM';
		} else if (timeSum>= 720 && timeSum<780) {
			result.current = result.current.join(':') + 'PM';
		} else {
			result.current[0] -= 12;
			result.current = result.current.join(':') + 'PM';
		}
		return result;
	} else {
		return {sunrise: '', sunset: '', current: '', dayOrNight: false};
	}
}

export const formatFiveDay = (fiveDay) => {
	const formattedForecast = [];
	const conditionArray = ['Clear', 'Clouds', 'Drizzle', 'Rain', 'Thunderstorm', 'Snow', 'Extreme'];
  	var dayHigh = fiveDay.list[0].main.temp;
  	var dayLow = fiveDay.list[0].main.temp;
  	var dayWeather = 0;
  	var thisDay = new Date();
  	var localOffset = thisDay.getTimezoneOffset() * 60;
  	var currentDay = new Date((fiveDay.list[0].dt + localOffset)* 1000);
  	fiveDay.list.forEach(item=>{
  		thisDay.setTime((item.dt + localOffset) * 1000);
  		if (currentDay.getDay()!==thisDay.getDay()){
  			formattedForecast.push({high: dayHigh, low: dayLow, day: currentDay.getDay(), weather: conditionArray[dayWeather]});
  			currentDay.setTime(thisDay.getTime());
  			dayHigh = item.main.temp;
  			dayLow = item.main.temp;
  			dayWeather = 0;
  		} 
  		if (dayHigh < item.main.temp){
  			dayHigh = item.main.temp;
  		}
  		if (dayLow > item.main.temp){
  			dayLow = item.main.temp;
  		}
  		if (conditionArray.indexOf(item.weather[0].main)===-1){
  			dayWeather = 6;
  		} else if (conditionArray[dayWeather]!==item.weather[0].main){
  			var index = conditionArray.indexOf(item.weather[0].main);
  			if (index>dayWeather){
  				dayWeather = index;
  			}
  		}
  	});
  	formattedForecast.push({high: dayHigh, low: dayLow, day: currentDay.getDay(), weather: conditionArray[dayWeather]});
  	if (formattedForecast.length === 6){
  		formattedForecast.shift();
  	}
  	return formattedForecast;
}

