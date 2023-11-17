import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-guess-player',
  template:`{{data}}`,
  templateUrl: './guess-player.component.html',
  styleUrls: ['./guess-player.component.css']
})
export class GuessPlayerComponent implements OnInit{

  public data: any[] = [];
  public player = {id: "", Nombre: "" ,Pila: "", Posicion: "", Equipo: "", Nacionalidad: "", Liga: "", Edad: ""};
  public form : FormGroup;
  public guess : FormGroup;
  public answer : boolean;
  public intentos : number = 3;


  constructor(private apiService: ApiService, private formBuilder : FormBuilder){}

  ngOnInit(): void {
      const CHOSENPLAYER : number = this.randomInt();
      this.getPlayer(CHOSENPLAYER);
      this.form = this.formBuilder.group({
        selector: ['', [Validators.required]],
        selector2: ['', [Validators.required]]
      });
      this.guess = this.formBuilder.group({
        guess: ['', [Validators.required]]
      })
  }

  public getPlayer(CHOSENPLAYER:number){ 
        this.apiService.getData().subscribe(data => {
          this.data = data;
          this.data.forEach(i => {
            if(i.id == CHOSENPLAYER){
              this.player = i;
              console.log(this.player);
            }
          });
        })
  }

  Consulta() : any{
    var edad : any = '';
    switch(this.form.value.selector){
      case "":{
        alert("Por favor, inserte un parametro para realizar una busqueda");
        break;
      }
      case "Nacionalidad":{
        if(this.form.value.selector2 == ""){
          alert("Por favor selecciona una opción");
        }
        else{
          if(this.form.value.selector2 == this.player.Nacionalidad){
          this.answer = true;
        }
        else{
          this.answer = false;
        }
          this.agregarConsulta(this.form.value.selector, this.form.value.selector2, this.answer);
        }

        break;
      }
      case "Liga":{
        if(this.form.value.selector2 == ""){
          alert("Por favor selecciona una opción");
        }
        else{
          if(this.form.value.selector2 == this.player.Liga){
          this.answer = true;
          }
          else{
            this.answer = false;
        }
          this.agregarConsulta(this.form.value.selector, this.form.value.selector2, this.answer);
        }

        break;
      }
      case "Posición":{
        if(this.form.value.selector2 == ""){
          alert("Por favor selecciona una opción");
        }
        else{
        if(this.form.value.selector2 == this.player.Posicion){
          this.answer = true;
        }
        else{
          this.answer = false;
        }
          this.agregarConsulta(this.form.value.selector, this.form.value.selector2, this.answer);
        }
        
        break;
      }
      case "Equipo":{
        if(this.form.value.selector2 == ""){
          alert("Por favor selecciona una opción");
        }
        else{
        if(this.form.value.selector2 == this.player.Equipo){
          this.answer = true;
        }
        else{
          this.answer = false;
        }
        this.agregarConsulta(this.form.value.selector, this.form.value.selector2, this.answer);
        }
        break;
      }
      case "Edad":{
        if(this.form.value.selector2 == ""){
          alert("Por favor selecciona una opción");
        }
        else{
        if(this.form.value.selector2 == this.player.Edad){
          edad = true;
        }
        else{
          if(this.player.Edad > this.form.value.selector2){
            edad = "Mas viejo!";
          }
          else{
            edad = "Mas joven!";
          }
        }
        this.agregarConsulta(this.form.value.selector, this.form.value.selector2, edad);
      }
        break;
      }
    }
  }

  agregarConsulta(selector:string, selector2:string, respuesta:any){
    const tabla : any = document.getElementById("tabla");

    tabla.innerHTML += `<tr >
    <td class="col">${selector}</td>
    <td class="col">${selector2}</td>
    <td class="col">${respuesta}</td>
    </tr>`;
  }

  Adivinar(){
    console.log(this.player.Nombre);
    console.log(this.guess.value.guess);
    if(this.guess.value.guess == this.player.Nombre || this.guess.value.guess == this.player.Pila){
      alert("Felicitaciones! Ganaste!");
      window.location.reload();
    }
    else{
      alert("Intentalo de nuevo");
      this.intentos -= 1;
    }
    if(this.intentos <= 0){
      alert("Perdiste! El jugador era: "+ this.player.Nombre);
      window.location.reload();
    }
  }

  randomInt(){
      let min = Math.ceil(1);
      let max = Math.floor(102);
      return Math.floor(Math.random() * (max - min) + min);
    }

    selector2(value : string) : void{
      let selector = <HTMLElement>document.getElementById("selector2");
      let html:string = ``;

        switch(value){
        case "": {
            break;
        }
        case "Nacionalidad": {
          selector.innerHTML = 
          ` <select name="selector2" id="selector2" formControlName="selector2">
              <option value="" >--Elige una opción--</option>
              <option value="Argentina">Argentina</option>
              <option value="Portugal">Portugal</option> 
              <option value="Noruega">Noruega</option>
              <option value="Brasil">Brasil</option>
              <option value="Francia">Francia</option>
              <option value="Belgica">Belgica</option>
              <option value="España">España</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Alemania">Alemania</option>
              <option value="Georgia">Georgia</option>
              <option value="Polonia">Polonia</option>
              <option value="Inglaterra">Inglaterra</option>
              <option value="Uruguay">Uruguay</option>
              <option value="Marruecos">Marruecos</option>
              <option value="Croacia">Croacia</option>
              <option value="Italia">Italia</option>
              <option value="Egipto">Egipto</option>
              <option value="Corea del Sur">Corea del Sur</option>
              <option value="Camerun">Camerun</option>
              <option value="Eslovaquia">Eslovaquia</option>
              <option value="Japon">Japon</option>
              <option value="Paises Bajos">Paises Bajos</option>
              <option value="Costa de Marfil">Costa de Marfil</option>
              <option value="Canada">Canada</option>
              <option value="Serbia">Serbia</option>
              <option value="Turquia">Turquia</option>
              <option value="Hungria">Hungria</option>
              <option value="Ecuador">Ecuador</option>
              <option value="Iran">Iran</option>
              <option value="Estados Unidos">Estados Unidos</option>
            </select>
          `  
          break;
        }
        case "Liga": {
          selector.innerHTML = 
          ` <select name="selector2" id="selector2" formControlName="selector2">
              <option value="" >--Elige una opción--</option>
              <option value="Major League Soccer">Major League Soccer</option>
              <option value="Liga Profesional Saudi">Liga Profesional Saudi</option>
              <option value="Premier League">Premier League</option>
              <option value="Primera Division de España">Primera Division de España</option>
              <option value="Ligue 1">Ligue 1</option>
              <option value="Serie A">Serie A</option>
              <option value="Bundesliga">Bundesliga</option>
              <option value="Primeira Liga">Primeira Liga</option>
              <option value="Superliga de Turquia League">Superliga de Turquia</option>
              <option value="Scottish Premiership">Scottish Premiership</option>
              <option value="Eredisivie">Eredisivie</option>
            </select>
          `
          break;  
        }
        case "Posición": {
          selector.innerHTML = 
          
          ` <select name="selector2" id="selector2" formControlName="selector2">
              <option value="" >--Elige una opción--</option>
              <option value="delantero">Delantero</option>
              <option value="centro">Centro-Campista</option>
              <option value="defensa">Defensor</option>
              <option value="portero">Portero</option>
            </select>
          `  
          break;
        }
        case "Equipo": {
          selector.innerHTML = 
          
          ` <select name="selector2" id="selector2" formControlName="selector2">
              <option value="" >--Elige una opción--</option>
              <option value="Inter Miami">Inter Miami</option>
              <option value="Al-Nassr">Al-Nassr</option>
              <option value="Manchester City">Manchester City</option>
              <option value="Real Madrid">Real Madrid</option>
              <option value="Paris Saint-Germain">Paris Saint-Germain</option>
              <option value="Atletico Madrid">Atletico Madrid</option>
              <option value="Napoli">Napoli</option>
              <option value="Barcelona">Barcelona</option>
              <option value="Arsenal">Arsenal</option>
              <option value="Al-Ittihad Jeddah">Al-Ittihad Jeddah</option>
              <option value="Bayern Munich">Bayern Munich</option>
              <option value="Milan">Milan</option>
              <option value="Aston Villa">Aston Villa</option>
              <option value="Al-Hilal">Al-Hilal</option>
              <option value="Inter Milan">Inter Milan</option>
              <option value="Manchester United">Manchester United</option>
              <option value="Liverpool">Liverpool</option>
              <option value="Chelsea">Chelsea</option>
              <option value="Benfica">Benfica</option>
              <option value="Sevilla">Sevilla</option>
              <option value="Roma">Roma</option>
              <option value="Newcastle United">Newcastle United</option>
              <option value="Al-Ahli Saudí">Al-Ahli Saudí</option>
              <option value="Real Sociedad">Real Sociedad</option>
              <option value="Leipzig">Leipzig</option>
              <option value="Olympique de Lyon">Olympique de Lyon</option>
              <option value="Borussia Dortmund">Borussia Dortmund</option>
              <option value="Brentford">Brentford</option>
              <option value="Bayer 04 Leversuken">Bayer 04 Leverkusen</option>
              <option value="Lille">Lille</option>
              <option value="Fenerbahce">Fenerbahce</option>
              <option value="Rayo Vallecano">Rayo Vallecano</option>
              <option value="Union Berlin">Union Berlin</option>
              <option value="Osasuna">Osasuna</option>
              <option value="Galatasaray">Galatasaray</option>
              <option value="Porto">Porto</option>
              <option value="Burnley">Burnley</option>
              <option value="Friburgo">Friburgo</option>
              <option value="Celtic">Celtic</option>
              <option value="Monaco">Monaco</option>
              <option value="Ajax">Ajax</option>
              <option value="Feyenoord">Feyenoord</option>
            </select>
          `  
          break;
        }
        case "Edad": {
          selector.innerHTML = 
          
          ` <select name="selector2" id="selector2" formControlName="selector2">
              <option value="" >--Elige una opción--</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
              <option value="32">32</option>
              <option value="33">33</option>
              <option value="34">34</option>
              <option value="35">35</option>
              <option value="36">36</option>
              <option value="37">37</option>
              <option value="38">38</option>
              <option value="39">39</option>
              <option value="40">40</option>
            </select>
          `  
          break;
        }
        }
    }
  }
  

  