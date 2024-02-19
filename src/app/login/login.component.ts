import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `{{data}}`,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginUsers: any[] = [];
  flag: number = 0;
  loginObj:any = {
    username: '',
    password: ''
  }

  constructor(private router: Router){}

  ngOnInit(): void {
    const localdata = localStorage.getItem('signUpUsers');
    if(localdata != null){
      this.loginUsers = JSON.parse(localdata);
    }
  }  

  Login(){
    this.loginUsers.forEach(i =>{
      if(i.username == this.loginObj.username && i.password == this.loginObj.password){
         localStorage.setItem('token', i.username);
         alert("Te has logeado correctamente!");
         this.flag = 1;
         this.router.navigateByUrl('/home');
      }
    })
    if(this.flag == 0){
      alert("El nombre de usuario o contraseña son incorrectos");
      console.log(this.loginObj.password);
    }
  }

  RedirectToSignup(){
    this.router.navigateByUrl('/signup');
  }

}
