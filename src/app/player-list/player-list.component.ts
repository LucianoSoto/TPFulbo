import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit{
  public data: any[] = [];
  public search: string = '';

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
    console.log(search);
  }
}

