import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { AccueilComponent } from './components/accueil/accueil.component';

const routes: Routes = [{ path: '', component: UserComponent },
{ path: 'accueil', component: AccueilComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
