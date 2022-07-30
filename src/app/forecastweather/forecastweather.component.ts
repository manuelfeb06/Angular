import {Component, Input} from "@angular/core";
import {IForecast} from "../interfaces/forecast.interface";
import {HttpClient,HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-forecast',
  templateUrl: './forecastweather.component.html'
})
export class ForecastweatherComponent {
  @Input()
  data!:IForecast | undefined;

}
