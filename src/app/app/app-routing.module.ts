import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './vistas/login/login.component';
import { NuevoUsuarioComponent } from './vistas/login/nuevo-usuario/nuevo-usuario.component';
import { HomePublicComponent } from './vistas/public/home-public/home-public.component';

const routes: Routes = [

  { path: 'HomePublic', component: HomePublicComponent },
  { path: 'login_I', component: LoginComponent, canActivate: [] },
  { path: 'NuevoUsuario', component: NuevoUsuarioComponent, canActivate: [] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
