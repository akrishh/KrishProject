import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { faWind, faTint, faThermometerThreeQuarters } from '@fortawesome/free-solid-svg-icons';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { WeatherdataService } from './../weather.service';
import { LoginService } from '../login/login.service';
import { WEATHER_DATA_TOKEN } from '../app.module';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss'],
  providers: [WeatherdataService]

})

export class WeatherdetailsComponent {
  // @Input() weatherUser: string = '';
  weatherUser = '';
  faWind = faWind;
  faTint = faTint;
  faThermo = faThermometerThreeQuarters;
  getdata: Array<data> = [];
  city: string = "";
  reset: boolean = true;
  invalid: boolean = false;
  disabledFlag: boolean = true;
  resultData: Array<data> = [];
  title: string = "Weather Guide";
  hint: string = "Eg., San Jose, Seattle, New York, Chicago, Atlanta, Austin, Denver";
  btnText: string = "Fetch";
  defaultValue: string = "Enter a City name";
  constructor(
    @Inject(WEATHER_DATA_TOKEN) private weatherData: WeatherdataService,
    private loginService: LoginService
  ) {
    console.log(this.weatherData.getdata());
  }

  ngOnInit(): void {
    this.getdata = this.weatherData.getdata();
    this.weatherUser = this.loginService.getLoggedInUser();
  }

  public validatedata() {
    this.disabledFlag = true;
    if (this.city && this.getdata) {
      this.resultData = [];
      this.resultData = this.getdata.filter(res => (res.name).toLowerCase() === (this.city).toLowerCase());
      this.reset = this.invalid = (this.resultData != undefined && this.resultData.length > 0) ? false : true;
      this.city = "";
    }
  }

  public textEntered(event: any) {
    this.disabledFlag = (event.target.value.length > 0) ? false : true;
  }
}

interface data {
  name: string,
  temperature: string,
  wind: string,
  humidity: string
}