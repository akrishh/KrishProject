import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  public welcomeText = "Welcome!!!";
  public idValue = "myId";
  public isDisabled = false;
  public valueofText = "TEST";
  public displayText = true;


  public color = "red";


  public colors = new Array("purple", "blue");

  @Input('parentData') public name: any;

  @Output() public childEvent = new EventEmitter();

  ngOnInit(): void {

  }

  fireEvent() {
    this.childEvent.emit('from the Child');
  }

}
