import { Component } from '@angular/core';
import {
  BreakpointObserver,
  BreakpointState
} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  
  card1_left: number;
  button1_left: number;
  input1_left: number;

  card2_left: number;
  button2_left: number;
  input2_left: number;


  isShown: boolean = false;

  constructor(public breakpointObserver: BreakpointObserver) {}

  title = 'myWeather';

  ngOnInit(){
    this.breakpointObserver
      .observe(['(max-width: 380px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isShown = false;
          this.card1_left = 10;
          this.input1_left = 15;
          this.button1_left = 125;

          this.card2_left = 190;
          this.input2_left = 195;
          this.button2_left = 305;
        } else {
          this.card1_left = 25;
          this.button1_left = 370;
          this.input1_left = 50;

          this.card2_left = 620;
          this.button2_left = 960;
          this.input2_left = 635;
        }
      });
  }

  addComponent() {
    this.isShown = true;
    console.log(this.isShown);
  }
}
