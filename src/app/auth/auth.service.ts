import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  
  isLogged(){
    if('token' != null){
      return !!localStorage.getItem('token');
    }
    else{
      return null;
    }
 
  }
}
