import { Component } from '@angular/core';

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  logo = 'assets/logo72.png';

  age = 23;
  email = 'ivanrr308@gmail.com';
  phone = '314-724-0837';
  currentLocation = 'St. Louis, MO';
  languages = 'English, Spanish, beginner French';
}
