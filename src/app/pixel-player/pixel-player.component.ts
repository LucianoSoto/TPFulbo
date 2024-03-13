import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pixel-player',
  templateUrl: './pixel-player.component.html',
  styleUrls: ['./pixel-player.component.css']
})
export class PixelPlayerComponent implements OnInit{

  constructor(private apiService: ApiService, private formBuilder : FormBuilder){}

  public rules :boolean = true;
  public form : FormGroup;
  public players : any[] = [];
  public player = {id: "", Nombre: "" ,Pila: "", Posicion: "", Equipo: "", Nacionalidad: "", Liga: "", Edad: "", Goles: "", Valor: "", Imagen: ""};
  public randomPlayer : number;
  public playerImg : string;
  public contador : number = 0;

  ngOnInit(): void {
    this.getPlayers();
    this.form = this.formBuilder.group({
      player: ['', [Validators.required]]
    });
  }
  
  public getPlayers(){ 
    this.apiService.getData().subscribe(data => {
      this.players = data;
    })
  }

  startGame(){
    this.rules = false;
    this.randomPlayer = this.randomInt();
    this.choosePlayer();
    this.playerImg = this.player.Imagen;
  }
  
  choosePlayer(){
    this.players.forEach(i => {
      if(i.id == this.randomPlayer){
        this.player = i;
        console.log(this.player);
      }
    });
  }

  randomInt(){
    let min = Math.ceil(1);
    let max = Math.floor(102);
    return Math.floor(Math.random() * (max - min) + min);
  }

  adivinar(){
    if(this.form.value.player == this.player.Nombre || this.form.value.player == this.player.Pila){
      this.startGame();
      this.contador++;
    }
    else{
      alert("Has perdido! Tu puntaje final fue: "+ this.contador);
      this.contador = 0;
      this.rules = true;
    }
  }
}
