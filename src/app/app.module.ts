import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { BookListComponent } from './book-list/book-list.component';
import { SingleBookComponent } from './book-list/single-book/single-book.component';
import { BookFormComponent } from './book-list/book-form/book-form.component';
import { HeaderComponent } from './header/header.component';
import {AuthService} from "./services/auth.service";
import {BooksService} from "./services/books.service";
import {AuthGuardService} from "./services/auth-guard.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes =[
  { path:'auth/signup', component: SignUpComponent},
  { path:'auth/signin', component: SignInComponent},
  { path:'books', canActivate:[AuthGuardService] ,component: BookListComponent},
  { path:'books/new',canActivate:[AuthGuardService] , component: BookFormComponent},
  { path:'books/view/:id',canActivate:[AuthGuardService] , component: SingleBookComponent},
  { path :'', redirectTo:'books', pathMatch:'full'},
  { path :'**', redirectTo:'books'}

]
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    BookListComponent,
    SingleBookComponent,
    BookFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    BooksService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
