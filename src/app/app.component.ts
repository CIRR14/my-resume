import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
import { OverlayContainer, ScrollingVisibility} from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public overlayContainer: OverlayContainer) {}

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

  aboutMe = false;
  resume = false;
  portfolio = false;
  contact = false;

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    console.log( innerWidth );
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

  @HostListener('window:scroll', [])
onWindowScroll() {
 console.log(scrollY);
 console.log(this.aboutMe);
 if (scrollY >= 835 && scrollY <= 1665) {
   console.log('HELLO');
  //  this.aboutMe = true;
   console.log(this.aboutMe);
 } else {
  //  this.aboutMe = false;
 }
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
