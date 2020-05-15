import { Component, OnInit } from '@angular/core';
import { MatFormFieldControl } from '@angular/material/form-field';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  hide : boolean;
  constructor() { }

  ngOnInit(): void {
    this.hide = true;
  }

}
