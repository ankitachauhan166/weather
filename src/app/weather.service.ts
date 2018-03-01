import { Injectable } from '@angular/core';
import{Http, Response} from '@angular/http';
import'rxjs/Rx';
import{Currentweather} from './currentweather';
import{Forecast} from './forecast';

@Injectable()
export class WeatherService {
  myWeather:Currentweather;
  location
  constructor(private http:Http) {  }
  

  localWeather(){
      return new Promise((res,rej)=> {
          navigator.geolocation.getCurrentPosition((pos)=>{
            this.location = pos.coords;
            const lat = this.location.latitude;
            const lon = this.location.longitude;
            return this.http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b87ef13e00bc9136960cd7c0541a91b3&units=imperial`).map((response:Response)=>response.json()).toPromise().then(
              (data)=>{
                  this.myWeather=new Currentweather(data.name,
                    data.main.temp,
                    data.weather[0].icon,
                    data.weather[0].description,
                    data.main.temp_max,
                    data.main.temp_min);
                    res(this.myWeather);
              }
            )
          })
      })
    }
    anotherCityWeather(city:string){
      return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b87ef13e00bc9136960cd7c0541a91b3&units=imperial`).map((response:Response)=>response.json());
    }
  fiveDayForecast(city:string){
    return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=b87ef13e00bc9136960cd7c0541a91b3&units=imperial`).map((response:Response)=>response.json());
  }
}
