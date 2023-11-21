import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import {CommonModule} from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { SwitchService } from '../services_switch/switch.service';
import { ModalComponent } from '../modal/modal.component';

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

    // modal


    this.modals.$modal.subscribe((valor) => {this.modalswitch = valor} )  
  

  }

  llenarData(){
    this.apiService.getData().subscribe(data => {
      this.data = data;
    })
  }

  


  //   ********** MODALS ********

  

  openmodal (){
    this.modalswitch = true;

  }

  closemodal(){
    this.modalswitch = false;
  }
  


 



}


