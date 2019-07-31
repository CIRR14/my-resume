import { Iskills } from './../skills';
import { Component } from '@angular/core';

@Component({
  selector: 'resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  skills: Iskills[] = [
    { name: 'JavaScript', outOfTen: 75 },
    { name: 'React', outOfTen: 40 },
    { name: 'HTML5', outOfTen: 95 },
    { name: 'Photoshop', outOfTen: 95 },
    { name: 'CSS', outOfTen: 95 },
    { name: 'Illustrator', outOfTen: 95 },
    { name: 'Angular 7', outOfTen: 80 },
    { name: 'InDesign', outOfTen: 90 },
    { name: 'Ionic Framework', outOfTen: 75 },
    { name: 'AdobeXD', outOfTen: 95 },
    { name: 'Java', outOfTen: 45 },
    { name: 'Firebase', outOfTen: 40 },
    { name: 'AWS', outOfTen: 50 },
    { name: 'Microsoft 365', outOfTen: 95 }
  ];
}
