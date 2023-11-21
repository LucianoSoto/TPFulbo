import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import {CommonModule} from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { SwitchService } from '../services_switch/switch.service';
import { NgModule } from '@angular/core';



@Component({
  selector: 'app-filtrar-equipo',
  templateUrl: './filtrar-equipo.component.html',
  styleUrls: ['./filtrar-equipo.component.css']
})
export class FiltrarEquipoComponent implements OnInit{
  public data:any = [
    []
  ]
  public lista_jugadores:any = [];
  constructor(private apiservice: ApiService ,private modals: SwitchService) {}


  ngOnInit(): void {
    this.cargar_data();
  }

  public cargar_data (){
    this.apiservice.get('http://localhost:3000/db')
    .subscribe(respueta => {
      this.data = respueta;
      console.log(respueta);
    })
  }

  public guardar_nombre_equipo (form:any){

    
    const nombre:any = form.value.nombre_equipo;


    for (let i = 0 ; i < 101 ; i++)
    {

   
      if (nombre == this.data.players[i].Equipo)
      {
        
        this.lista_jugadores.push(this.data.players[i].Nombre)
        

      }


    }

    if(this.lista_jugadores.length == 0)
    {
      alert("Ese equipo no esta en la base")
    }
  
  }


}
