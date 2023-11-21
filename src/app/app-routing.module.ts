import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerListComponent } from './player-list/player-list.component';
import { GuessPlayerComponent } from './guess-player/guess-player.component';
import { AppComponent } from './app.component';
import { DreamTeamComponent } from './dream-team/dream-team.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: AppComponent },
  { path: 'playerList', component: PlayerListComponent },
  { path: 'guessPlayer', component: GuessPlayerComponent },
  { path: 'dreamTeam', component: DreamTeamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
