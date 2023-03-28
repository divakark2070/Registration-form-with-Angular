import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { RegFormComponent } from './reg-form/reg-form.component';

const routes: Routes = [
  {path:"", component:LogInComponent, pathMatch:"full"},
  {path:"reg-form", component:RegFormComponent},
  {path:"log-in", component:LogInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
