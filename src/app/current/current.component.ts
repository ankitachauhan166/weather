import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import {Currentweather} from '../currentweather';
import { Action } from 'rxjs/scheduler/Action';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'wa-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {
  myWeather:Currentweather;
  constructor(private ws:WeatherService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data:{myWeather:Currentweather})=>{
        this.myWeather = data.myWeather;
      }
    )
  }
  onSubmit(weatherForm:NgForm){
console.log(weatherForm);
this.ws.anotherCityWeather(weatherForm.value.city).subscribe(
  (data)=>{
    console.log(data);
    this.myWeather=new Currentweather(data.name,
      data.main.temp,
      data.weather[0].icon,
      data.weather[0].description,
      data.main.temp_max,
      data.main.temp_min);
  }
)
 }
}
