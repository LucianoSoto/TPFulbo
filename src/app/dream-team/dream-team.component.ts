import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from '../service/api.service';
import {CommonModule} from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from '../app.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-dream-team',
  templateUrl: './dream-team.component.html',
  styleUrls: ['./dream-team.component.css']
})
export class DreamTeamComponent implements OnInit {
  
  @ViewChild('cancha', {static : false}) cancha!: ElementRef;

  public data: any[] = [];
  public posSelected: number = -1;
  public selectedPlayer : FormGroup;
  public formationInput : FormGroup;
  public selectedFormation : String = "noFormacion";
  public player = {id: "", Nombre: "" ,Pila: "", Posicion: "", Equipo: "", Nacionalidad: "", Liga: "", Edad: "", Goles: "", Valor: "", Imagen: ""};
  public playerArray : any[]= [10];
  
  
constructor(private apiService: ApiService, private formBuilder : FormBuilder) {}

  ngOnInit(): void {
    this.llenarData();
    this.selectedPlayer = this.formBuilder.group({
        player: ['', Validators.required]
    })
    this.formationInput = this.formBuilder.group({
      formation: ['', Validators.required]
  })
  }

  llenarData(){
    this.apiService.getData().subscribe(data => {
    this.data = data;
  })
}

  selectFormation(){
    this.selectedFormation = this.formationInput.value.formation
    console.log(this.formationInput.value.formation);
  }

  selectPos(position:string){
    console.log(position);
    this.posSelected = Number(position);
    this.selectedPlayer.reset();
  } 

  selectPlayer(){
    let flag : boolean = false;
    this.data.forEach(i => {
        if(this.selectedPlayer.value.player == i.Nombre || this.selectedPlayer.value.player == i.Pila){
          this.player = i;
          flag = true;
        }
    });
    if(flag == false){
      alert("El jugador seleccionado no existe en la base de datos");
    }
    else{
      this.checkPlayer();
    }
  }

  checkPlayer(){
    for (let index = 0; index <= 10; index++){
      if(this.playerArray[index] == this.player.Imagen){
        this.playerArray[index] = '';
      }
    }
    this.addPlayer();

  }

  addPlayer(){
    this.playerArray[this.posSelected] = this.player.Imagen;
    this.posSelected = -1;
   }

   exportToPdf(){ 
      let pdf = new jsPDF('l', 'pt', 'a4');
      pdf.html(this.cancha.nativeElement, {
        callback: (pdf) => {
          pdf.save("Dreamteam.pdf");
        }
      });
   }
}

 






