import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarSocioComponent } from './sociosProveedores/agregar-socio/agregar-socio.component';
import { MenuSocioComponent } from './sociosProveedores/menu-socio/menu-socio.component';
import { MostrarProveedoresComponent } from './sociosProveedores/mostrar-proveedores/mostrar-proveedores.component';
import { ModificarProveedorComponent } from './sociosProveedores/modificar-proveedor/modificar-proveedor.component';
import { EditarProveedorComponent } from './sociosProveedores/editar-proveedor/editar-proveedor.component';
import { AgregarAgenciaComponent } from './agencia/agregar-agencia/agregar-agencia.component';
import { EditarAgenciaComponent } from './agencia/editar-agencia/editar-agencia.component';
import { MenuAgenciaComponent } from './agencia/menu-agencia/menu-agencia.component';
import { ModificarAgenciaComponent } from './agencia/modificar-agencia/modificar-agencia.component';
import { MostrarAgenciaComponent } from './agencia/mostrar-agencia/mostrar-agencia.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarSocioComponent,
    MenuSocioComponent,
    MostrarProveedoresComponent,
    ModificarProveedorComponent,
    EditarProveedorComponent,
    AgregarAgenciaComponent,
    EditarAgenciaComponent,
    MenuAgenciaComponent,
    ModificarAgenciaComponent,
    MostrarAgenciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
