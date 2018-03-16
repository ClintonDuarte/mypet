import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroProprietarioPage } from './cadastro-proprietario';

@NgModule({
  declarations: [
    CadastroProprietarioPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroProprietarioPage),
  ],
})
export class CadastroProprietarioPageModule {}
