import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss']
})

export class LearnComponent implements OnInit {
  constructor() { }
  onlineStatus: any = '';
  newObs: Observable<any> | undefined;
  ngOnInit(): void {
    this.newObs = new Observable(observer => {
      setTimeout(() => {
        observer.next('In progress');
      }, 2000);
    });
    this.newObs.subscribe(val => {
      this.onlineStatus = val;
    });
    this.newObs = new Observable(observer => {
      setTimeout(() => {
        observer.next('Processing');
      }, 4000);
    });
    this.newObs.subscribe(val => {
      this.onlineStatus = val;
    });
    this.newObs = new Observable(observer => {
      setTimeout(() => {
        observer.next('Completed');
      }, 6000);
    });
    this.newObs.subscribe(val => {
      this.onlineStatus = val;
    });
  }
}