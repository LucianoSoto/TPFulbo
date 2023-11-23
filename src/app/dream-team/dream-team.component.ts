import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import {CommonModule} from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { SwitchService } from '../services_switch/switch.service';

@Component({
  selector: 'app-dream-team',
  templateUrl: './dream-team.component.html',
  styleUrls: ['./dream-team.component.css']
})
export class DreamTeamComponent implements OnInit {


  public data:any = []

  modalswitch!: boolean;
  equipo_final: any;

  constructor(private apiService: ApiService ,private modals: SwitchService) {}

  ngOnInit(): void {
    this.llenarData();
    this.modals.$modal.subscribe((valor) => {this.modalswitch = valor} )  
  }

  llenarData(){
    this.apiService.getData().subscribe(data => {
    this.data = data;
  })
}

  openmodal (){
    this.modalswitch = true;
  }

  closemodal(){
    this.modalswitch = false;
  }
}


