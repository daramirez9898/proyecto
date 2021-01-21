import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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


const routes: Routes = [
  {path:'agregarSocio',component:AgregarSocioComponent},
  {path:'menuSocio',component:MenuSocioComponent},
  {path:'mostrarProveedores',component:MostrarProveedoresComponent},
  {path:'modificaProveedor/:id',component:ModificarProveedorComponent},
  {path:'editarProveedor/:id',component:EditarProveedorComponent},

  {path:'agregarAgencia',component:AgregarAgenciaComponent},
  {path:'menuAgencia',component:MenuAgenciaComponent},
  {path:'mostrarAgencias',component:MostrarAgenciaComponent},
  {path:'modificaAgencia/:id',component:ModificarAgenciaComponent},
  {path:'editarAgencia/:id',component:EditarAgenciaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
