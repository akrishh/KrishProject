import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  todo: object = {};

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
  }

  ngOnInit() {
    this.router.navigate(['login']);
    this.http.get('https://jsonplaceholder.typicode.com/posts?userId=1').subscribe(x => this.todo = x);
  }

}
