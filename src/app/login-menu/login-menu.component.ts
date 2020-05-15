import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-menu',
  templateUrl: './login-menu.component.html',
  styleUrls: ['./login-menu.component.css']
})
export class LoginMenuComponent implements OnInit {
  loginStatus: boolean;
  username: string;
  disabled: boolean
  color: Observable<any>;
  favoriteColorControl = new FormControl('');
  constructor() { }

  ngOnInit(): void {
    this.loginStatus = false;
    this.color = this.favoriteColorControl.valueChanges;
    
  }

  submit(){
    this.color.subscribe({
      next(position) {
        console.log(position);
      }
    });
  }
}
