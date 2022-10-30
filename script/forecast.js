const key = '{APIKEY FROM ACCUWEATHER}';


const getWeather = async (id) => {

    const base = `https://dataservice.accuweather.com/currentconditions/v1/${id}`;
    const query = `?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();
    
    return data[0];

};


// get city information
const getCity = async (city) => {

    const base = "https://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base+query);
    const data = await response.json();
    //console.log(data[0])
    
    return data[0];

};

// getCity('kolkata').then((data) => {
//     return getWeather(data.Key)
// }).then((data) => {
//     console.log(data);})
// .catch((e) => {
//     console.log(e)
// })


