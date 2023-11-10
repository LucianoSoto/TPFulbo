import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit{
  data: any[] = [];

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
      this.llenarData();
  }
  
  llenarData(){
        this.apiService.getData().subscribe(data => {
          this.data = data;
          console.log(this.data);
        })
      }
}