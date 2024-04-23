import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuard]  // Asegura que solo usuarios autenticados puedan acceder
  },
  {
    path: 'dispositivos',
    loadChildren: () => import('./dispositivos/dispositivos.module').then(m => m.DispositivosPageModule),
    canActivate: [AuthGuard]  // Asegura que solo usuarios autenticados puedan acceder
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'consumos',
    loadChildren: () => import('./pages/consumos/consumos.module').then(m => m.ConsumosModule),
    canActivate: [AuthGuard]  // Si necesitas control de acceso
  },
  {
    path: 'gestion-usuarios',
    loadChildren: () => import('./pages/gestion-usuarios/gestion-usuarios.module').then(m => m.GestionUsuariosModule),
    canActivate: [AuthGuard]  // Si necesitas control de acceso
  },
  {
    path: 'gestion-grupos',
    loadChildren: () => import('./pages/gestion-grupos/gestion-grupos.module').then(m => m.GestionGruposModule),
    canActivate: [AuthGuard]  // Si necesitas control de acceso
  },
  {
    path: 'programar-horarios',
    loadChildren: () => import('./pages/programar-horarios/programar-horarios.module').then(m => m.ProgramarHorariosModule),
    canActivate: [AuthGuard]  // Si necesitas control de acceso
  },
  {
    path: 'consumo-detalle/:id',
    loadChildren: () => import('./pages/consumo-detalle/consumo-detalle.module').then(m => m.ConsumoDetalleModule)
  },
  {
    path: 'grupo-detalle/:id',
    loadChildren: () => import('./pages/grupo-detalle/grupo-detalle.module').then(m => m.GrupoDetalleModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
