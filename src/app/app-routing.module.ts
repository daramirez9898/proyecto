import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarSocioComponent } from './sociosProveedores/agregar-socio/agregar-socio.component';
import { MenuSocioComponent } from './sociosProveedores/menu-socio/menu-socio.component';
import { MostrarProveedoresComponent } from './sociosProveedores/mostrar-proveedores/mostrar-proveedores.component';
import { ModificarProveedorComponent } from './sociosProveedores/modificar-proveedor/modificar-proveedor.component';
import { EditarProveedorComponent } from './sociosProveedores/editar-proveedor/editar-proveedor.component';
import { AsociacionComponent } from './sociosProveedores/asociacion/asociacion.component';
import { AgregarAsociacionComponent } from './sociosProveedores/agregar-asociacion/agregar-asociacion.component';



import { AgregarAgenciaComponent } from './agencia/agregar-agencia/agregar-agencia.component';
import { EditarAgenciaComponent } from './agencia/editar-agencia/editar-agencia.component';
import { MenuAgenciaComponent } from './agencia/menu-agencia/menu-agencia.component';
import { ModificarAgenciaComponent } from './agencia/modificar-agencia/modificar-agencia.component';
import { MostrarAgenciaComponent } from './agencia/mostrar-agencia/mostrar-agencia.component';
import { AsociacionAgenciaComponent } from './agencia/asociacion-agencia/asociacion-agencia.component';
import { AgregarAsociacionAgenciaComponent } from './agencia/agregar-asociacion-agencia/agregar-asociacion-agencia.component';
import { ReporteAgenciaComponent } from './agencia/reporte-agencia/reporte-agencia.component';
import { HomeComponent } from './home/home/home.component';


import { AgregarClienteComponent } from './cliente/agregar-cliente/agregar-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { MenuClienteComponent } from './cliente/menu-cliente/menu-cliente.component';
import { ModificarClienteComponent } from './cliente/modificar-cliente/modificar-cliente.component';
import { MostrarClienteComponent } from './cliente/mostrar-cliente/mostrar-cliente.component';
import { RegistrarClienteComponent } from './cliente/registrar-cliente/registrar-cliente.component';

import { AgregarViajeroComponent } from './viajero/agregar-viajero/agregar-viajero.component';
import { EditarViajeroComponent } from './viajero/editar-viajero/editar-viajero.component';
import { MenuViajeroComponent } from './viajero/menu-viajero/menu-viajero.component';
import { MostrarViajerosComponent } from './viajero/mostrar-viajeros/mostrar-viajeros.component';
import { ModificarViajeroComponent } from './viajero/modificar-viajero/modificar-viajero.component';
import { RegistrarViajeroComponent } from './viajero/registrar-viajero/registrar-viajero.component';


import { AgregarPaqueteComponent } from './paquete/agregar-paquete/agregar-paquete.component';
import { AgregarItinerarioComponent } from './paquete/agregar-itinerario/agregar-itinerario.component';
import { MenuPaqueteComponent } from './paquete/menu-paquete/menu-paquete.component';
import { MostrarPaqueteComponent } from './paquete/mostrar-paquete/mostrar-paquete.component';
import { AgregarAtraccionComponent } from './paquete/agregar-atraccion/agregar-atraccion.component';
import { PrecioComponent } from './paquete/precio/precio.component';
import { MostrarPaquetesComponent } from './paquete/mostrar-paquetes/mostrar-paquetes.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'agregarSocio',component:AgregarSocioComponent},
  {path:'menuSocio',component:MenuSocioComponent},
  {path:'mostrarProveedores',component:MostrarProveedoresComponent},
  {path:'modificaProveedor/:id',component:ModificarProveedorComponent},
  {path:'editarProveedor/:id',component:EditarProveedorComponent},
  {path: 'agregarAsociacion',component:AgregarAsociacionComponent},
  {path: 'mostrarAsociados',component:AsociacionComponent},
  {path: 'reporte',component:ReporteAgenciaComponent},

  {path:'agregarAgencia',component:AgregarAgenciaComponent},
  {path:'menuAgencia',component:MenuAgenciaComponent},
  {path:'mostrarAgencias',component:MostrarAgenciaComponent},
  {path:'modificaAgencia/:id',component:ModificarAgenciaComponent},
  {path:'editarAgencia/:id',component:EditarAgenciaComponent},
  {path:'agregarAsociacionAgencia',component:AgregarAsociacionAgenciaComponent},
  {path:'mostrarAgenciasAsociados',component:AsociacionAgenciaComponent},
  

  {path:'agregarCliente',component:AgregarClienteComponent},
  {path:'menuCliente',component:MenuClienteComponent},
  {path:'mostrarClientes',component:MostrarClienteComponent},
  {path:'modificaCliente/:id',component:ModificarClienteComponent},
  {path:'editarCliente/:id',component:EditarClienteComponent},
  {path:'resgistrarCliente',component:RegistrarClienteComponent},
  
  
  {path:'agregarViajero', component:AgregarViajeroComponent},
  {path:'menuViajero',component:MenuViajeroComponent},
  {path:'mostrarViajeros',component:MostrarViajerosComponent},
  {path:'modificaViajero/:id',component:ModificarViajeroComponent},
  {path:'editarViajero/:id',component:EditarViajeroComponent},
  {path:'registrarViajero',component:RegistrarViajeroComponent},


  {path:'agregarPaquete',component:AgregarPaqueteComponent},
  {path:'agregarItinerario/:id1/:id2',component:AgregarItinerarioComponent},
  {path:'agregarPrecio/:id',component:PrecioComponent},
  {path:'menuPaquete',component:MenuPaqueteComponent},
  {path:'mostrarPaquetes',component:MostrarPaqueteComponent},
  {path:'agregarAtraccion/:id',component:AgregarAtraccionComponent},
  {path:'mostrarPaquetes',component:MostrarPaqueteComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
