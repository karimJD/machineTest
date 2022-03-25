import { Component, Input, OnInit } from '@angular/core';
import { WeatherDataService } from '../../weather-data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card_left : string;
  @Input() input_left : string;
  @Input() button_left : string;
  city : string;
  heat : number;
  description : string;
  wind : number;
  visibility : number;
  humidity :number;

  

  constructor(private weatherDataService : WeatherDataService) { }

  ngOnInit() {
    console.log(this.card_left);
    this.city = "Some city !"
    this.heat = 250.05;
    this.description = "NA";
    this.wind = 0;
    this.humidity = 0;
    this.visibility = 0;
  }

  public search(name) {
    var lat,lon : number;

    this.weatherDataService.prepareInfoURL(name);

    console.log("received data from card  "+name);
    this.weatherDataService.fetchCityInfo().subscribe((data: any)=>{
      console.log("name res from api : "+ data[0].name);
      lat = data[0].lat;
      lon = data[0].lon;
      this.weatherDataService.prepareWeatherURL(data[0].lat,data[0].lon);
      this.weatherDataService.fetchWeatherData().subscribe((data: any)=>{
        console.log("data from weather: "+data.weather[0].main);
        this.city = data.name;
        this.description = data.weather[0].description;
        this.heat = data.main.temp;
        this.wind = data.wind.speed;
        this.visibility = data.visibility;
        this.humidity = data.main.humidity;

        console.log("finished fetching and affecting ! ");
      
      })
    })
  
  }

 

}
