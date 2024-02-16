import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeIVIEnergiaRouteModule } from './home-ivienergia-route.module';


import { ContentIviComponent } from './content-ivi/content-ivi.component';
import { PreCadastroLoteComponent } from './Menu/pre-cadastro-lote/pre-cadastro-lote.component';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { PreCadastroComponent } from './Menu/pre-cadastro/pre-cadastro.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { ConfiguracoeComponent } from './configuracoe/configuracoe.component';;
import { ValidationComponent } from './validation/validation.component';
import { TooltipFormComponent } from './validation/tooltip-form/tooltip-form.component';
import { HttpClientModule } from '@angular/common/http';
import { TasksComponent } from './task/tasks.component';
import { TaskSidemenuComponent } from './task/task-sidemenu/task-sidemenu.component';
import { NavbarIviComponent } from './navbar-ivi/navbar-ivi.component';
import { LoadingComponent } from './loading/loading.component';
import { BasicModalComponent } from './basic-modal/basic-modal.component';
import { SimpleModalComponent } from './basic-modal/simple-modal/simple-modal.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UiKitsModule } from '../ui-kits/ui-kits.module';
import { SharedServiceService } from './shared/shared-service.service';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [
    ContentIviComponent,  
    PreCadastroLoteComponent,
    RelatorioComponent,
    PreCadastroComponent,
    CadastroComponent,
    ConsultasComponent,
    ConfiguracoeComponent,
    ValidationComponent,
    TooltipFormComponent,
    TasksComponent,
    TaskSidemenuComponent,
    NavbarIviComponent,
    LoadingComponent,
    BasicModalComponent,
    SimpleModalComponent,
    NavbarIviComponent
  
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    HomeIVIEnergiaRouteModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule
   
    
    
    

    
  ],
  exports: [
    NavbarIviComponent
  
  ],
  providers: [SharedServiceService]
})
export class HomeIVIEnergiaModule { }
