import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent {

  appUser = this.authService.appUser

  authForm = this.builder.group({
      'username':['',[Validators.required, Validators.minLength(3)]]
      ,'password':['', [Validators.required, Validators.minLength(3)]]
    })

  constructor(
    private builder: FormBuilder,
    public authService: AuthService,
    ){}


  doLogin() :void {
    let username = this.authForm.get('username')?.value ?? ''
    let password = this.authForm.get('password')?.value ?? ''

    this.authService.logIn(username, password)

  }

  doLogOut() :void{
    this.authService.logOut()
  }



}
