import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';





@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  

  private cityInfoServer: string;
  private weatherServer: string;

  
  constructor(private httpClient : HttpClient) { }

  public fetchCityInfo() {
    return this.httpClient.get(this.cityInfoServer);
  }

  public fetchWeatherData() {
    return this.httpClient.get(this.weatherServer);
  }

  public prepareInfoURL(city: string) {
    this.cityInfoServer = "http://api.openweathermap.org/geo/1.0/direct?q="+ city +"&limit=5&appid=5d9b63cdb9ae9cf0781bb928791b549d";
  }

  public prepareWeatherURL(lat: number,lon: number){
    this.weatherServer = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=5d9b63cdb9ae9cf0781bb928791b549d";
  }

}
