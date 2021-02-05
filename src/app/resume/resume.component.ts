import { Iskills } from './../skills';
import { Component } from '@angular/core';

@Component({
  selector: 'resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  skills: Iskills[] = [
    { name: 'JavaScript', outOfTen: 90 }, // Tech
    { name: 'CSS', outOfTen: 95 }, // Art
    { name: 'Angular 7', outOfTen: 90 }, // Tech
    { name: 'Photoshop', outOfTen: 95 }, // Art
    { name: 'React', outOfTen: 70 }, // Tech
    { name: 'Illustrator', outOfTen: 95 }, // Art
    { name: 'HTML5', outOfTen: 95 }, // Tech
    { name: 'InDesign', outOfTen: 90 }, // Art
    { name: 'Ionic Framework', outOfTen: 75 }, // Tech
    { name: 'AdobeXD', outOfTen: 95 }, // Art
    { name: 'Java', outOfTen: 45 }, // Tech
    { name: 'Firebase', outOfTen: 85 }, // Art
    { name: 'AWS', outOfTen: 50 }, // Tech
    { name: 'Microsoft 365', outOfTen: 95 }, // Art
    { name: 'GraphQL', outOfTen: 40}
  ];
}
