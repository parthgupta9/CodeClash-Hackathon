import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary',
  params: {
    bl_latitude: '11.847676',
    bl_longitude: '108.473209',
    tr_longitude: '109.149359',
    tr_latitude: '12.838442',
    limit: '30',
    currency: 'USD',
    subcategory: 'hotel,bb,specialty',
    adults: '1'
  },
  headers: {
    'X-RapidAPI-Key': 'a1c4765807msh4bbbdbaf58eb6c8p1ab2adjsne47c8f4b67c5',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}



// weather api content

const options = {
  method: 'GET',
  url: 'https://open-weather-map27.p.rapidapi.com/weather',
  headers: {
    'X-RapidAPI-Key': 'a1c4765807msh4bbbdbaf58eb6c8p1ab2adjsne47c8f4b67c5',
    'X-RapidAPI-Host': 'open-weather-map27.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
