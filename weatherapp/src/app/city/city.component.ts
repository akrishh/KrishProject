import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  route: any;
  city: any;

  constructor() { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((route: { get: (arg0: string) => any; }) => {
      this.city = route.get('city');
      //Do something with the city value;
    });
  }



}
