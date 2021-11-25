import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule  } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './vistas/login/login.component';
import { MenuComponent } from './vistas/public/menu/menu.component';
import { CarruselComponent } from './vistas/public/carrusel/carrusel.component';
import { FooterComponent } from './vistas/public/footer/footer.component';
import { HomePublicComponent } from './vistas/public/home-public/home-public.component';
import { NuevoUsuarioComponent } from './vistas/login/nuevo-usuario/nuevo-usuario.component';
import { RestablecerContraComponent } from './vistas/login/restablecer-contra/restablecer-contra.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    CarruselComponent,
    FooterComponent,
    HomePublicComponent,
    NuevoUsuarioComponent,
    RestablecerContraComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
