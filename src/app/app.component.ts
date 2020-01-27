import { Component, OnInit, HostBinding, ElementRef } from '@angular/core';
import { OverlayContainer} from '@angular/cdk/overlay';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  constructor(public overlayContainer: OverlayContainer, private el: ElementRef) {}

  @HostBinding('class') componentCssClass;
  title = 'Ivan Romero';
  backgroundImage = 'assets/background.jpg';
  altBackgroundImage = 'assets/mohawk_lake.jpg';
  logo = 'assets/logo72.png';

  deactivatedTheme = 'Dark Theme';
  lightTheme = true;
  darkTheme = false;
  desktop = true;
  mobile = false;
  innerWidth: any;

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 500) {
      this.desktop = false;
      this.mobile = true;
    }

  }

  scrollToElement($element): void {
    $element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start'
    });
  }

  toggleTheme(theme) {
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;
    if (theme !== 'custom-theme-dark') {
      console.log(theme);
      this.deactivatedTheme = 'Dark Theme';
      console.log('deactivated is: ' + this.deactivatedTheme);
      this.lightTheme = true;
      console.log('light theme: ' + this.lightTheme);
      this.darkTheme = false;
      console.log('dark theme: ' + this.darkTheme);

    } else if ( theme !== 'custom-theme-light') {
      console.log(theme);
      this.deactivatedTheme = 'Light Theme';
      console.log('deactivated is: ' + this.deactivatedTheme);
      this.lightTheme = false;
      console.log('light theme: ' + this.lightTheme);
      this.darkTheme = true;
      console.log('dark theme: ' + this.darkTheme);
    }

  }

}
