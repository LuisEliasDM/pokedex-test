import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/modules/error/not-found/not-found.component';
import { HomeComponent } from './components/modules/layout/home/home.component';
import { AuthGuard } from './services/guards/auth.guard';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "404",
    component: HomeComponent
  },
  {
    path: "auth",
    loadChildren: () => import('./components/modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: "pokedex",
    loadChildren: () => import('./components/modules/pokedex/pokedex.module').then(m => m.PokedexModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  },
  {
    path: "user",
    loadChildren: () => import('./components/modules/user/user.module').then(m => m.UserModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
