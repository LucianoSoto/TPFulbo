import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerListComponent } from './player-list.component';
import { FiltroPipe } from './pipes/filtro.pipe';



@NgModule({
  declarations: [
    PlayerListComponent,
    FiltroPipe 
  ],

  imports: [
    CommonModule
  ],

  exports: [
    PlayerListComponent
  ]
})
export class PlayerModule { }
