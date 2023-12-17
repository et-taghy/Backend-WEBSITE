import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ProduitPCComponent } from './components/produit-pc/produit-pc.component';
import { ProduitTelComponent } from './components/produit-tel/produit-tel.component';
import { ProduitAccesoireComponent } from './components/produit-accesoire/produit-accesoire.component';


@NgModule({
  declarations: [
    UserComponent,
    AccueilComponent,
    ProduitPCComponent,
    ProduitTelComponent,
    ProduitAccesoireComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
