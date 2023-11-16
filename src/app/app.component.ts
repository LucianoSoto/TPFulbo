import { Component, OnInit } from '@angular/core';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  template:`<app-guess-player [data] = "this.llenarData()"> <app-guess-player>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  
  title = 'TPFulbo'

  data: any[] = [];

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
      this.llenarData();
      
  }
  
  llenarData(){
        this.apiService.getData().subscribe(data => {
          this.data = data;
        })
      }
}
