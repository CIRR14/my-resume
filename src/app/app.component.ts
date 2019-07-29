import { Component, OnInit, HostBinding } from '@angular/core';
import { OverlayContainer} from '@angular/cdk/overlay';

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
  toggleToThisTheme = 'Dark Theme';
  lightTheme = true;
  darkTheme = false;
  desktop = true;
  mobile = false;
  innerWidth: any;


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

  toggleTheme(theme) {
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;
    if (this.toggleToThisTheme === 'Dark Theme' && this.darkTheme === false && this.lightTheme ===true) {
      this.toggleToThisTheme = 'Light Theme';
      this.lightTheme = true;
      this.darkTheme = false;
    } else {
      this.lightTheme = false;
      this.darkTheme = true;
    }

    console.log(theme);
    console.log('turning to dark theme');
  }

}
