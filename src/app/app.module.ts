import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PlayerModule } from './player-list/player.module';
import { GuessPlayerComponent } from './guess-player/guess-player.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { DreamTeamComponent } from './dream-team/dream-team.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ModalComponent,
    DreamTeamComponent,
    GuessPlayerComponent,
    
  ],
  imports: [
    BrowserModule,
    PlayerModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
