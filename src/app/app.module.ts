import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { PlayerListComponent } from './player-list/player-list.component';
import { NavComponent } from './nav/nav.component';
import { PlayerModule } from './player-list/player.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // PlayerListComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    PlayerModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
