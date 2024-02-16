import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { PreCadastroComponent } from './pre-cadastro/pre-cadastro.component';
import { PreCadastroLoteComponent } from './pre-cadastro-lote/pre-cadastro-lote.component';


const routes: Routes = [
  {
    data : {
      title : "Filas",
      subtitulo: "Pré Projeto",
      breadcrumb: "Pré Projeto"

  },
    path: 'PreProjeto',
    component:PreCadastroComponent,
  },
  {
    data : {
      title : "Ivi Energia",
      breadcrumb: "Pré Projeto por Lote"
  },
    path: 'PreProjetoLote',
    component:PreCadastroLoteComponent
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubRotaMenuModule { }
