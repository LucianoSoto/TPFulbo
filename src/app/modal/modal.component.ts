import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { ApiService } from '../service/api.service';
import { AppComponent } from '../app.component';
import { SwitchService } from '../services_switch/switch.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})



export class ModalComponent implements OnInit {

  imageUrl: string | undefined;
  
  formData: any = {
    nombre: ''
  };
  
  public data:any = []
  public equipo_final:any = [];
  public posicion_final:any = [];
  public intercalado:any[] = [];
  nombre: any;
  Posicion: any;
  posicion: any;

  constructor(private apiService: ApiService, private modals: SwitchService) {}


  ngOnInit(): void {
  
    this.llenarData();
  }

  
  savedata (form:any){
    
    const nombre:any = form.value.nombre;
    const posicion:any = form.value.posicion
    const espacio:any = " ";


    for(let i = 0 ; i < 101 ; i++)
    {
      if(nombre == this.data.players[i].Nombre)
      {

        for(let j = 0 ; j < 11 ; j++)
        {

          if (nombre == this.equipo_final[j])
          {
            alert("El jugador ya esta en el equipo")
            return;
          }

          if(posicion == this.posicion_final[j])
          {
            alert("Esa posicion ya esta asignada");
            return;
          }

            
        }
        
        if(this.equipo_final.length == 11)
        {
          alert("El equipo ya esta lleno");
          return;
        }
        else
        {
          this.equipo_final.push(this.data.players[i].Nombre);
          this.posicion_final.push(posicion);
          this.imageUrl = this.data.players[i].Imagen;
    
          return;
          
        }

      }
    }
    
    alert("Ese jugador NO existe en la base");
    
  }



  public ver_equipo_final (){

    this.equipo_final.forEach((elemento: any) => {
      console.log(elemento);
    })

  }



  llenarData(){
    this.apiService.getData().subscribe(data => {
    this.data = data;
  })
}


  closemodal(){
    this.modals.$modal.emit(false)
  }




  
/*
  verificar_duplicado(form:any){

    const nombre:any = form.value.nombre;

    for(let i = 0 ; i < 11 ; i++)
    {

      if (nombre == this.equipo_final.players[i].nombre)
      {



      }

    }

  }

*/
 
  

}







