import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerListComponent } from './player-list/player-list.component';
import { GuessPlayerComponent } from './guess-player/guess-player.component';
import { AppComponent } from './app.component';
import { DreamTeamComponent } from './dream-team/dream-team.component';
import { TeamListComponent } from './team-list/team-list.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth/auth.guard';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import { PixelPlayerComponent } from './pixel-player/pixel-player.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'home', component: HomeComponent, canActivate: [authGuard]},
  { path: 'playerList', component: PlayerListComponent, canActivate: [authGuard] },
  { path: 'guessPlayer', component: GuessPlayerComponent, canActivate: [authGuard] },
  { path: 'dreamTeam', component: DreamTeamComponent, canActivate: [authGuard]},
  { path: 'teamList', component: TeamListComponent, canActivate: [authGuard]},
  { path: 'pixelPlayer', component: PixelPlayerComponent, canActivate: [authGuard]},
  { path: 'logout', component: LogoutComponent, canActivate: [authGuard]},
  { path: 'notFound', component: NotFoundComponent},
  { path: '**', redirectTo: 'notFound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
