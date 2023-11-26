import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ContainerComponent } from './container/container.component';

const routes: Routes = [
  {
    path:'layout',
    component: LayoutComponent
  },
  {
    path: 'home',
    component: ContainerComponent
  },
  {
    path: '',
    redirectTo: 'layout',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
