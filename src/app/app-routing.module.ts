import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './shared/component/layout/content/content.component';
import { content } from './shared/routes/routes';
import { FullComponent } from './shared/component/layout/full/full.component';
import { fullRoutes } from './shared/routes/full-routes';
import { LoginComponent } from './auth/login/login.component';
import { AdminGuard } from './shared/guard/admin.guard';

const routes: Routes = [
  {
    path : '',
    //redirectTo : '/dashboard/default',
    redirectTo : 'home-ivienergia/menu/PreProjeto',
    pathMatch : 'full'
  },
  {
    path: 'menu',
    children: [
      {
        path: '', // Caminho vazio ou outro caminho, dependendo dos seus requisitos
        loadChildren: () => import('../app/component/home-ivienergia/Menu/sub-rota-menu.module').then(m => m.SubRotaMenuModule),
      }
    ]
  },
  {
    path: 'auth/login',
    component: LoginComponent
  },
  {
    path : '',
    component : ContentComponent,
    canActivate: [AdminGuard],
    children : content
  },
  {
    path : '',
    component : FullComponent,
    canActivate: [AdminGuard],
    children : fullRoutes,
  },
  {
    path : '**',
    redirectTo : '',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
