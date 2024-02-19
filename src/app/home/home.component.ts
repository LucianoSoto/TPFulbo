import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { TeamApiService } from 'src/app/service/team-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  @Input() id : number;
  public dataPlayer: any[] = [];
  public topPlayers: any[] = [];
  constructor(private apiService: ApiService){}


  ngOnInit() : void{
    this.getPlayers();
  }

  public getPlayers(){ 
    this.apiService.getData().subscribe(data => {
      this.dataPlayer = data;
      this.dataPlayer.forEach(i => {
        if(i.id <= 7){
          this.topPlayers.push(i);
        }
      });
    })
}

}
