import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ivan Romero';
  backgroundImage = 'assets/background.jpg';
  altBackgroundImage = 'assets/mohawk_lake.jpg';
  logo = 'assets/logo72.png';

  scrollToElement($element): void {
    $element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start'
    });
  }
}
