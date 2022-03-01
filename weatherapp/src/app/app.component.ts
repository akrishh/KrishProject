import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  public welcomeText: string = "Welcome";
  public title: string = "Title of the application";
  public todo: object = {};
  public name: string = "Parent To child";
  public message: any;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
  }

  ngOnInit() {
    // this.router.navigate(['welcome']);
    this.http.get('https://jsonplaceholder.typicode.com/posts?userId=1').subscribe(
      x => {
        return this.todo = x;
      }
    );
  }

}
