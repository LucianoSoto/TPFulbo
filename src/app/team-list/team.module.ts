import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamListComponent } from './team-list.component';
import { ViewTeamComponent } from './view-team/view-team.component';
import { TeamPipe } from './pipes/filtro.pipe';



@NgModule({
  declarations: [
    TeamListComponent,
    ViewTeamComponent,
    TeamPipe
  ],
  imports: [
    CommonModule
  ],
  providers: [TeamPipe]
})
export class TeamModule { }
