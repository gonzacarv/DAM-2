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
  
  // Agrega aquí más rutas según sea necesario
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
