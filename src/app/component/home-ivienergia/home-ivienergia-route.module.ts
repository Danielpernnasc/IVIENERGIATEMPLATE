import { NgModule } from '@angular/core';;
import { RouterModule, Routes } from '@angular/router';
import { ContentIviComponent } from './content-ivi/content-ivi.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ConfiguracoeComponent } from './configuracoe/configuracoe.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { RelatorioComponent } from './relatorio/relatorio.component';


const routes: Routes = [
  {
    path : '',
    children : [
      {
        path : 'content',
        //component : DefaultComponent,
        component: ContentIviComponent,
        // data : {
        //   title : 'Default Dashboard',
        //   breadcrumb : 'Default Dashboard'
        // }
      },
      {
        data : {
          title : "Ivi Energia",
          breadcrumb: "Home"
      },
        path: 'cadastro',
        component: CadastroComponent,
      },
      {
        data : {
          title : "Ivi Energia",
          breadcrumb: "Configurações"
      },
        path: 'configuracoes',
        component: ConfiguracoeComponent,
      },
      {
        data : {
          title : "Ivi Energia",
          breadcrumb: "Consultas"
      },
        path: 'consultas',
        component: ConsultasComponent,
      },
      {
        path: 'menu',
    
        loadChildren: () => import('../../component/home-ivienergia/Menu/sub-rota-menu.module').then(m => m.SubRotaMenuModule),

    },
      {
        data : {
          title : "Ivi Energia",
          breadcrumb: "Relatório"
      },
        path: 'relatorio',
        component:RelatorioComponent,
      },
      
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeIVIEnergiaRouteModule { }
