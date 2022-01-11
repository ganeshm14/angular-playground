import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { UserListingComponent } from './user-listing/user-listing.component';

import { UserDomainService } from './services/user-domain.service';
import { NewUserComponent } from './new-user/new-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const appRoutes: Routes = [
  { path: '', redirectTo: '/collection-listing', pathMatch: 'full' },
  { path: 'collection-listing', component: UserListingComponent },
  { path: 'new-collection', component: NewUserComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    UserListingComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    BrowserAnimationsModule
  ],
  exports: [
    RouterModule
  ],
  providers: [UserDomainService],
  bootstrap: [AppComponent]
})
export class AppModule { }