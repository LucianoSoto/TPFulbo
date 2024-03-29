import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { AppComponent } from '../app.component';
import { ViewPlayerComponent } from './view-player/view-player.component';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
  providers: [AppComponent]
})

export class PlayerListComponent implements OnInit{
  public data: any[] = [];
  public search: string = '';
  public idSelected:number = 0;

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
      this.llenarData();
  }
  
  llenarData(){
          this.apiService.getData().subscribe(data => {
          this.data = data;
        })
      }

  onSearchPlayer(search:string){
    this.search = search;
  }

  viewPlayer(id:string){
    this.idSelected = Number(id);
    this.search = '';
    
  }
}

