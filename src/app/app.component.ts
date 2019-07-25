import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ivan Romero';
  backgroundImage = 'assets/background.jpg';
  logo = 'assets/logo72.png';

  scrollToElement($element): void {
    console.log('hello');
    $element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }
}
