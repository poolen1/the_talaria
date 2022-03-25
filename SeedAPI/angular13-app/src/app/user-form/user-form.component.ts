import { Component, OnInit } from '@angular/core';

import { User } from '../models/user'

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new User(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
  }

}
