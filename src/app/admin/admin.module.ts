import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GestionUserComponent } from './components/gestion-user/gestion-user.component';
import { GestionOrderComponent } from './components/gestion-order/gestion-order.component';
import { GestionCategorieComponent } from './components/gestion-categorie/gestion-categorie.component';
import { GestionProduitComponent } from './components/gestion-produit/gestion-produit.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    GestionUserComponent,
    GestionOrderComponent,
    GestionCategorieComponent,
    GestionProduitComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
