import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-guess-player',
  template:`{{data}}`,
  templateUrl: './guess-player.component.html',
  styleUrls: ['./guess-player.component.css']
})
export class GuessPlayerComponent implements OnInit{

  public data: any[] = [];

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    const CHOSENPLAYER : number = this.randomInt();
      this.getPlayer();
  }

  public getPlayer(){ 
        this.apiService.getData().subscribe(data => {
          this.data = data;
        })
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
          ` <select name="selector2" id="selector2">
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
          ` <select name="selector2" id="selector2">
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
          
          ` <select name="selector2" id="selector2">
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
          
          ` <select name="selector2" id="selector2">
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
        }
    }
  }
  

  