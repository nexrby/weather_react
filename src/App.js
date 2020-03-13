import React from 'react';
import Info from './components/Info';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '8c849261b5d7f9a96498c6b1d0a1aa3f';

class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    wind: undefined,
    pressure: undefined,
    error: undefined
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    
    if(city){
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      const data = await api_url.json();

      console.log(data);

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        wind: data.wind.speed,
        pressure: data.main.pressure,
        error: undefined
      });
    } else {
        this.setState({
          temp: undefined,
          city: undefined,
          country: undefined,
          wind: undefined,
          pressure: undefined,
          error: 'Введите название населенного пункта'
        });
      }
  };

  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-5 info card-body">
                <Info />
              </div>
              <div className="col-12 col-lg-7 form">
                <Form weatherMethod={this.gettingWeather} />
                <Weather 
                  temp={this.state.temp}
                  city={this.state.city}
                  country={this.state.country}
                  wind={this.state.wind}
                  pressure={this.state.pressure}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
        
        
      </div>
    );
  }
}

export default App;