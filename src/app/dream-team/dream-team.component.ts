import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import {CommonModule} from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'; // Importa FormsModule


@Component({
  selector: 'app-dream-team',
  templateUrl: './dream-team.component.html',
  styleUrls: ['./dream-team.component.css']
})
export class DreamTeamComponent implements OnInit {

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

constructor(private apiService: ApiService) {}

  
  modalswitch!: boolean;



  ngOnInit(): void {
  this.llenarData();


  }

  llenarData(){
    this.apiService.getData().subscribe(data => {
    this.data = data;
  })
}

    savedata (form:any){
      console.log(form.value.posicion);
      
      const nombre:any = form.value.nombre;
      const posicion:any = form.value.posicion;
      
      if(nombre == "")
      {
        alert("Falta el jugador");
        return;
      }

      if(posicion == "")
      {
        alert("Falta la posicion");
        return;
      }
  
  
      for(let i = 0 ; i < 101 ; i++)
      {
        if(nombre == this.data[i].Nombre)
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
            this.equipo_final.push(this.data[i].Nombre);
            this.posicion_final.push(posicion);
            this.imageUrl = this.data[i].Imagen;
      
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
  
  


 






