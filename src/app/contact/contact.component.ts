import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.contactForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }
  onClickSubmit(email, password) {
    alert('Your Email is : ' + email + `</br>` +
    'Your Password is: ' + password);
  }
   ngOnInit() {
   }

}
