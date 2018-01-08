import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  emailForm: FormGroup;

  constructor(private formbuilder: FormBuilder,private title: Title)
  {
    title.setTitle('Home');
    this.emailForm = this.formbuilder.group(
      {
        'email' : ['', Validators.required]
      }
    );
  }

  ngOnInit() {
  }

  subscribeNewsletter(event,formData)
  {
    event.preventDefault();
    console.log(formData);
    let controls = formData.controls;
    let email =   controls.email.value;

    if(!formData.valid)
    {
      controls.email._touched = true;
      return false;
    }
    else
    {
      alert('Thank you for your subscription.');
    }

  }

}
