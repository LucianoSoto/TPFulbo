import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { TeamApiService } from 'src/app/service/team-api.service';

@Component({
  selector: 'app-view-player',
  templateUrl: './view-player.component.html',
  styleUrls: ['./view-player.component.css']
})
export class ViewPlayerComponent implements OnInit{
  @Input() idSelected : number;
  public dataPlayer: any[] = [];
  public dataTeam: any[] = [];
  public player = {id: "", Nombre: "" ,Pila: "", Posicion: "", Equipo: "", Nacionalidad: "", Liga: "", Edad: "", Altura: "", Goles: "", Valor: "", Imagen: ""};
  public team = {Nombre: "", Escudo: "", Liga: "", Titulos: "", DT: "", Goleadores: ""};

  constructor(private apiService: ApiService, private teamService: TeamApiService){}


  ngOnInit() : void{
    this.getPlayer(this.idSelected);
  }

  public getPlayer(idSelected:number){ 
    this.apiService.getData().subscribe(data => {
      this.dataPlayer = data;
      this.dataPlayer.forEach(i => {
        if(i.id == idSelected){
          this.player = i;
        }
      });
    })
    this.teamService.getData().subscribe(data =>{
      this.dataTeam = data;
      this.dataTeam.forEach(i => {
        if(this.player.Equipo == i.Nombre){
          this.team = i; 
        }
      })
    })
}

}
