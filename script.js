
    let city =''

    const out = document.querySelector('.out')
    const btn = document.querySelector('#btn')
    const input  = document.querySelector('#input')
    const wrap = document.querySelector('.wrap')

    btn.addEventListener('click',()=>{
    city = input.value


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6e34a89994a4c6875843fa199ec95ede`)
    .then((resp)=>resp.json())
    .then(data=>{
        data.weather.forEach(element => {
        
            let whether = ''

            if(element.main === 'Clear'){
                whether = 'ясно'
                wrap.classList.remove('clouds','rain', 'snow', 'drizzle', 'thundestorm')
                wrap.classList.add('clear')
            }else if(element.main === 'Clouds'){
                whether = 'облачно'
                wrap.classList.remove('clear','rain', 'snow', 'drizzle', 'thundestorm')
                wrap.classList.add('clouds')
            }else if(element.main === 'Rain'){
                whether = 'дождь'
                wrap.classList.remove('clouds','clear', 'snow', 'drizzle', 'thundestorm')
                wrap.classList.add('rain')
            }else if(element.main === 'Snow'){
                whether = 'снег'
                wrap.classList.remove('clouds','rain', 'clear', 'drizzle', 'thundestorm')
                wrap.classList.add('snow')
            }else if(element.main === 'Drizzle'){
                whether = 'мелкий дождь'
                wrap.classList.remove('clouds','rain', 'snow', 'clear', 'thundestorm')
                wrap.classList.add('drizzle')
            }else if(element.main === 'Thunderstorm'){
                whether = 'гроза'
                wrap.classList.remove('clouds','rain', 'snow', 'drizzle', 'clear')
                wrap.classList.add('thunderstorm')
            }
            

            out.innerHTML = `
                        <div class='render weather'>Погода: ${whether}</div>
                        <div class='temp render'>Температура: ${Math.trunc(data.main.temp - 273)}</div>
                        <div class='feels_like render'>Ощущается как: ${Math.trunc(data.main.feels_like -273)}</div>
                        <div class='speed render'>Скорость вестра: ${data.wind.speed}м/с</div>
            `
        });
    })
    
    .catch()

    input.value =''
        
})

