import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupUsers: any[] = [];
  flag: number = 0;
  signupObj:any = {
    username: '',
    password: '',
    email: ''
  }

  constructor(private router: Router){}

  ngOnInit(): void {
    const localdata = localStorage.getItem('signUpUsers');
    if(localdata != null){
      this.signupUsers = JSON.parse(localdata);
    }
  }  

  InsertData(){
    if(this.signupObj.username == '' || this.signupObj.email == '' || this.signupObj.password == ''){
      alert("Por favor, rellenar todos los campos");
    }
    this.signupUsers.forEach(i => {
      if(i.username == this.signupObj.username){
        alert("Ese nombre de usuario ya existe")
        this.flag = 1;
      }else if(i.email == this.signupObj.email){
        alert("Ya hay un usuario registrado con ese Email");
        this.flag = 1;
      }
    });
    if(this.flag == 1){
      window.location.reload();
    }
    else{
      this.signupUsers.push(this.signupObj);
      localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));
      alert("Cuenta creada correctamente!");
      this.router.navigateByUrl('/login');
    }
    
  }

  ReturnToLogin(){
    this.router.navigateByUrl('/login');
  }

}

