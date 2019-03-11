import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { TablesComponent } from './tables/tables.component';
//import { TypographyComponent } from './typography/typography.component';
import { BadgesComponent } from './badges/badges.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ListadoComponent } from './listado/listado.component';
import { ProductComponent } from './products/product.component';
import { GraficaComponent } from './grafica/grafica.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent }, 
  { path: 'tables', component: TablesComponent },
  { path: 'badges', component: BadgesComponent },
  { path: 'listado', component: ListadoComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'grafica', component: GraficaComponent },
  { path: 'products', component: ProductComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
