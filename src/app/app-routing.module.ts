import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewProfileComponent } from './new-profile/new-profile.component';

const routes: Routes = [
  {path: "new-profile", component: NewProfileComponent}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
