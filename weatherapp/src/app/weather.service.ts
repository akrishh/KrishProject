import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherdataService {

  getdata() {
    return [
      {
        name: "San Jose",
        temperature: "36º F",
        wind: "31Kmph",
        humidity: "66%",
      },
      {
        name: "Chennai",
        temperature: "26º F",
        wind: "31Kmph",
        humidity: "66%",
      },
      {
        name: "Seattle",
        temperature: "30º F",
        wind: "4Kmph",
        humidity: "9%",
      },
      {
        name: "New York",
        temperature: "20º F",
        wind: "8Kmph",
        humidity: "61%",
      },
      {
        name: "Chicago",
        temperature: "27º F",
        wind: "35Kmph",
        humidity: "2%",
      },
      {
        name: "Atlanta",
        temperature: "22º F",
        wind: "25Kmph",
        humidity: "5%",
      },
      {
        name: "Austin",
        temperature: "25º F",
        wind: "1Kmph",
        humidity: "5%",
      },
      {
        name: "Denver",
        temperature: "30º F",
        wind: "8Kmph",
        humidity: "48%",
      },
      {
        name: "Pennsylvania",
        temperature: "52º F",
        wind: "3Kmph",
        humidity: "85%",
      },
      {
        name: "India",
        temperature: "36º F",
        wind: "2.5Kmph",
        humidity: "88%",
      },
    ]
  }
}