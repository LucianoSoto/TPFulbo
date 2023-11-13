import { Pipe, PipeTransform } from '@angular/core';
import { Player } from '../interfaces/player.interfaces';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(players: Player[], search : string = ''): Player[] {

    const filteredPlayers = players.filter( player => player.Nombre.includes( search ));

    if (search.length == 0){
      return players;
    }
    else{
      return filteredPlayers;
    }
  }

}
