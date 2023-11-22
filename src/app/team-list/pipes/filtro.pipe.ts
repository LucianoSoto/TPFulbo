import { Pipe, PipeTransform } from '@angular/core';
import { Team } from '../interfaces/team.interfaces';

@Pipe({
  name: 'filtro'
})
export class TeamPipe implements PipeTransform {

  transform(team: Team[], search : string = ''): Team[] {

    const filteredteam = team.filter( player => player.Nombre.includes( search ));

    if (search.length == 0){
      return team;
    }
    else{
      return filteredteam;
    }
  }

}
