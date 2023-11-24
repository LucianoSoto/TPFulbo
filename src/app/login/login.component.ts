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

  public form : FormGroup;

  constructor(private formBuilder : FormBuilder, private router: Router){}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]]
    });
  }  

  Login(){
    if(this.form.value.username != ''){
      localStorage.setItem('token', this.form.value.username);
      alert("Te has logeado correctamente!");
      this.router.navigateByUrl('/home');
    }
    else{
      alert("Por favor inserte un nombre de usuario");
    }
    
  }

}
