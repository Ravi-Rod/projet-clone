import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(email:String, password:String){
    localStorage.setItem("token", Math.random()+"");
  }

  get isloggedIn() {
    if(localStorage.getItem('token')){
      return true;
    }
    return false;
  }
}
