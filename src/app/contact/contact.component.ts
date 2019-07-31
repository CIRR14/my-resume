import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      email: ['', Validators.required ],
      subject: ['', Validators.required ],
      message: ['', Validators.required]
    });
  }

  ngOnInit() {
  }
}

