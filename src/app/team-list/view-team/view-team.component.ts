import { Component, Input, OnInit } from '@angular/core';
import { TeamApiService } from 'src/app/service/team-api.service';

@Component({
  selector: 'app-view-team',
  templateUrl: './view-team.component.html',
  styleUrls: ['./view-team.component.css']
})
export class ViewTeamComponent {
    @Input() idSelected : number;
      public data: any[] = [];
      public team = {id: "", Nombre: "" ,Titulos: "", DT: "", Goleadores: [], Escudo: "", Liga: ""};

      constructor(private TeamApiService: TeamApiService){}
      
      ngOnInit() : void{
          this.getTeam(this.idSelected);
      }

      public getTeam(idSelected:number){ 
        this.TeamApiService.getData().subscribe(data => {
          this.data = data;
          this.data.forEach(i => {
            if(i.id == idSelected){
              this.team = i;
            }
          });
        })
    }
}
  