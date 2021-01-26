import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

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
import { AsociacionComponent } from './sociosProveedores/asociacion/asociacion.component';
import { AgregarAsociacionComponent } from './sociosProveedores/agregar-asociacion/agregar-asociacion.component';
import { AsociacionAgenciaComponent } from './agencia/asociacion-agencia/asociacion-agencia.component';
import { AgregarAsociacionAgenciaComponent } from './agencia/agregar-asociacion-agencia/agregar-asociacion-agencia.component';
import { HomeComponent } from './home/home/home.component';
import { AgregarClienteComponent } from './cliente/agregar-cliente/agregar-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { MenuClienteComponent } from './cliente/menu-cliente/menu-cliente.component';
import { ModificarClienteComponent } from './cliente/modificar-cliente/modificar-cliente.component';
import { MostrarClienteComponent } from './cliente/mostrar-cliente/mostrar-cliente.component';
import { RegistrarClienteComponent } from './cliente/registrar-cliente/registrar-cliente.component';
import { ReporteAgenciaComponent } from './agencia/reporte-agencia/reporte-agencia.component';
import { AgregarViajeroComponent } from './viajero/agregar-viajero/agregar-viajero.component';
import { MenuViajeroComponent } from './viajero/menu-viajero/menu-viajero.component';
import { RegistrarViajeroComponent } from './viajero/registrar-viajero/registrar-viajero.component';
import { MostrarViajerosComponent } from './viajero/mostrar-viajeros/mostrar-viajeros.component';
import { ModificarViajeroComponent } from './viajero/modificar-viajero/modificar-viajero.component';
import { EditarViajeroComponent } from './viajero/editar-viajero/editar-viajero.component';
import { AgregarPaqueteComponent } from './paquete/agregar-paquete/agregar-paquete.component';
import { MostrarPaqueteComponent } from './paquete/mostrar-paquete/mostrar-paquete.component';
import { MenuPaqueteComponent } from './paquete/menu-paquete/menu-paquete.component';
import { AgregarItinerarioComponent } from './paquete/agregar-itinerario/agregar-itinerario.component';
import { SeleccionarPaqueteComponent } from './compra/seleccionar-paquete/seleccionar-paquete.component';

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
    MostrarAgenciaComponent,
    AsociacionComponent,
    AgregarAsociacionComponent,
    AsociacionAgenciaComponent,
    AgregarAsociacionAgenciaComponent,
    HomeComponent,
    AgregarClienteComponent,
    EditarClienteComponent,
    MenuClienteComponent,
    ModificarClienteComponent,
    MostrarClienteComponent,
    RegistrarClienteComponent,
    ReporteAgenciaComponent,
    AgregarViajeroComponent,
    MenuViajeroComponent,
    RegistrarViajeroComponent,
    MostrarViajerosComponent,
    ModificarViajeroComponent,
    EditarViajeroComponent,
    AgregarPaqueteComponent,
    MostrarPaqueteComponent,
    MenuPaqueteComponent,
    AgregarItinerarioComponent,
    SeleccionarPaqueteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
