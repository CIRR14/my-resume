import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() {}

  title = 'Ivan Romero';
  backgroundImage = 'assets/background.jpg';
  altBackgroundImage = 'assets/mohawk_lake.jpg';
  logo = 'assets/logo72.png';
  currentTheme = 'Light Theme';
  desktop = true;
  innerWidth: any;

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    console.log( innerWidth );
    if (this.innerWidth <= 500) {
      this.desktop = false;
    }
  }

  scrollToElement($element): void {
    $element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start'
    });
  }

  turnToDarkTheme() {
    console.log('turning to dark theme');
  }




}
