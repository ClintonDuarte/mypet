import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsPetPage } from './details-pet';

@NgModule({
  declarations: [
    DetailsPetPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsPetPage),
  ],
})
export class DetailsPetPageModule {}
