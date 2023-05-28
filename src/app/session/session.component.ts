import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent {

  authForm = this.builder.group({
      'username':['',[Validators.required, Validators.minLength(3)]]
      ,'password':['', [Validators.required, Validators.minLength(3)]]
    })

  private auhtUser = {
    username: '',
    password: ''
  }

  constructor(private builder: FormBuilder){

  }


  doLogin() :void {
    this.auhtUser.username = this.authForm.get('username')?.value ?? ''
    this.auhtUser.password = this.authForm.get('password')?.value ?? ''
    console.log(this.auhtUser)

  }



}
