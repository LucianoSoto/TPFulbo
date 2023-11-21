import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerListComponent } from './player-list.component';
import { FiltroPipe } from './pipes/filtro.pipe';
import { ViewPlayerComponent } from './view-player/view-player.component';



@NgModule({
  declarations: [
    PlayerListComponent,
    FiltroPipe,
    ViewPlayerComponent
  ],

  imports: [
    CommonModule
  ],

  exports: [
    PlayerListComponent,
  ]
})
export class PlayerModule { }
