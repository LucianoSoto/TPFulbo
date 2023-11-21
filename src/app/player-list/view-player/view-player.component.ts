import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-view-player',
  templateUrl: './view-player.component.html',
  styleUrls: ['./view-player.component.css']
})
export class ViewPlayerComponent implements OnInit{
  @Input() idSelected : number;
  public data: any[] = [];
  public player = {id: "", Nombre: "" ,Pila: "", Posicion: "", Equipo: "", Nacionalidad: "", Liga: "", Edad: "", Altura: "", Goles: "", Valor: "", Imagen: ""};

  constructor(private apiService: ApiService){}


  ngOnInit() : void{
    this.getPlayer(this.idSelected);
  }

  public getPlayer(idSelected:number){ 
    this.apiService.getData().subscribe(data => {
      this.data = data;
      this.data.forEach(i => {
        if(i.id == idSelected){
          this.player = i;
          console.log(this.player);
        }
      });
    })
}

}
