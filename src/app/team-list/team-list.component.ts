import { Component } from '@angular/core';
import { TeamApiService } from '../service/team-api.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent {
    public data: any[] = [];
    public search: string = '';
    public idSelected:number = 0;
    
    constructor(private apiService: TeamApiService){}

    ngOnInit(): void {
        this.llenarData();
    }
    
    llenarData(){
            this.apiService.getData().subscribe(data => {
            this.data = data;
          })
        }

    onSearchTeam(search:string){
      this.search = search;
    }

    viewTeam(id:string){      
      this.idSelected = Number(id);
      this.search = '';
    }
}
