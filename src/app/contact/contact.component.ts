import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm : FormGroup;

  constructor(private fb: FormBuilder,private title: Title)
  {
    title.setTitle('Contact');
    this.contactForm = this.fb.group(
      {
        'name': ['', Validators.required],
        'email': ['', Validators.required],
        'comments': ['']
      }
    )
  }

  ngOnInit() {
  }

  contactUs(event,formData)
  {
    event.preventDefault();
    console.log(formData);

    let controls = formData.controls;
    let email =   controls.email.value;
    let name = controls.name.value;
    let comments = controls.comments.value;

    if(!formData.valid)
    {
      controls.name._touched = true;
      controls.email._touched = true;
      return false;
    }
    else
    {
      alert('Thank you for your contacting us.');
    }

  }

}
