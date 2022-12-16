import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RemoveComponent } from './remove/remove.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path: 'remove/:removeId', component: RemoveComponent
  },
  {
    path: 'update/:idofInvoiceUpdateit', component: UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
