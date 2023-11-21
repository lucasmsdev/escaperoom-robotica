// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnigmaComponent } from './pages/enigma/enigma.component';
import { HomeComponent } from './pages/home/home.component';
import { GroupsComponent } from './pages/groups/groups.component';
import { BookFormComponent } from './pages/book-form/book-form.component';



@NgModule({
  declarations: [
    AppComponent,
    EnigmaComponent,
    HomeComponent,
    GroupsComponent,
    BookFormComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
