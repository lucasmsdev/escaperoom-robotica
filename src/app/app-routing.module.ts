import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupsComponent } from './pages/groups/groups.component';
import { EnigmaComponent } from './pages/enigma/enigma.component';
import { BookFormComponent } from './pages/book-form/book-form.component';

const routes: Routes = [
  {path: '', component:GroupsComponent},
  {path: 'enigma', component:EnigmaComponent},
  {path: 'form', component:BookFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
