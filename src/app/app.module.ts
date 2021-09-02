import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { ButtonMostrarComponent } from './button-mostrar/button-mostrar.component';
import { EmpleadoService } from './empleados/empleado.service';
import { Router, RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormComponent } from './empleados/form/form.component';
import { FormsModule} from '@angular/forms'; 
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations'
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from  '@angular/material/core';
import { DetallesComponent } from './empleados/detalles/detalles.component';


registerLocaleData(localeEs,'es');

const routes: Routes =[
  {path:'',redirectTo:'/empleados', pathMatch:'full'},
  {path:'tecnologias',component:TecnologiasComponent},
  {path:'empleados',component: EmpleadosComponent},
  {path:'empleados/page/:page',component: EmpleadosComponent},
  {path:'empleados/altaEmpleados',component: FormComponent},
  {path:'empleados/altaEmpleados/:id',component: FormComponent},
  {path:'empleados/detalle/:id',component: DetallesComponent},
  {path:'habitaciones',component: HabitacionesComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TecnologiasComponent,
    EmpleadosComponent,
    ButtonMostrarComponent,
    FormComponent,
    HabitacionesComponent,
    PaginatorComponent,
    DetallesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [EmpleadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
