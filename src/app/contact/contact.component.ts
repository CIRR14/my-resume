import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  // contactForm: FormGroup;
  options: FormGroup;
  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto'
    });
    // this.createForm();
  }
  // createForm() {
  //   this.contactForm = this.fb.group({
  //     email: [''],
  //     password: ['']
  //   });
  // }
  // onClickSubmit(name, email) {
  //   alert('Your name is : ' + name + 'Your email is: ' + email);
  // }
  ngOnInit() {}
}
