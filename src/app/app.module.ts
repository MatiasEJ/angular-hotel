import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { ButtonMostrarComponent } from './button-mostrar/button-mostrar.component';
import { EmpleadoService } from './empleados/empleado.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TecnologiasComponent,
    EmpleadosComponent,
    ButtonMostrarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EmpleadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
