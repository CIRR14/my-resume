import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactMeForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.contactMeForm = this.fb.group({
      name: ['', Validators.required ],
      email: ['', Validators.required ],
      subject: ['', Validators.required ],
      message: ['', Validators.required]
    });
  }

  submit() {
    alert('Message not sent; Coming soon. Email me at ivanrr308@gmail.com.')
    console.log(this.contactMeForm.value);
  }

  ngOnInit() {
  }
}

