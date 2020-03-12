import React from 'react';

const Weather = (props) =>  {
    return (
        <div>
            {props.city &&
                <div className="card card-body">    
                    <p>Погода в {props.city}, {props.country}</p>
                    <p>Температура: {props.temp} &#8451;</p>
                    <p>Ветер: {props.wind} м/с</p>
                    <p>Атмосферное давление: {props.pressure} мм.рт.ст</p>
                </div>
            }
            <p>{props.error}</p>
        </div>
    )
}

export default Weather;