import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NewProfileComponent } from './new-profile/new-profile.component';

const routes: Routes = [
  {path: 'new-profile', component: NewProfileComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NewProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
