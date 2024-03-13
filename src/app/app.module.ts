import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PlayerModule } from './player-list/player.module';
import { GuessPlayerComponent } from './guess-player/guess-player.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DreamTeamComponent } from './dream-team/dream-team.component';
import { TeamModule } from './team-list/team.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import { PixelPlayerComponent } from './pixel-player/pixel-player.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DreamTeamComponent,
    GuessPlayerComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    LogoutComponent,
    SignupComponent,
    PixelPlayerComponent
  ],
  imports: [
    BrowserModule,
    PlayerModule,
    TeamModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
