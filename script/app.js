const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img')

const updateUI = (data) => {

    const cityDetails = data.cityDetails;
    const weather = data.weather;

    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;

    details.innerHTML = `
    <div class="text-muted text-uppercase text-center details">
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&#8451;</span>
        </div>
    </div>
    `;

    let timeSrc = null;
    if(weather.IsDayTime){
        timeSrc = 'img/day.svg';
    }else{
        timeSrc = 'img/night.svg';
    }

    time.setAttribute('src', timeSrc);
    icon.setAttribute('src', iconSrc);

    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }

};

const updateCity = async (id) => {

    const cityDetails = await getCity(id);

    const weather = await getWeather(cityDetails.Key);

    return {
        cityDetails ,
        weather
    };


}

cityForm.addEventListener('submit', (e)=>{
    // prevent loading
    e.preventDefault();

    constcity = cityForm.city.value.trim();
    cityForm.reset()

    // Update the UI
    updateCity(constcity).then((data) => {
        console.log(data)
        updateUI(data);
    }).catch((e) => {
        console.log(e)
    });

})
