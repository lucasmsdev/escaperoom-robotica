import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupsComponent } from './pages/groups/groups.component';
import { EnigmaComponent } from './pages/enigma/enigma.component';
import { BookFormComponent } from './pages/book-form/book-form.component';
import { GroupsixComponent } from './pages/groupsix/groupsix.component';

const routes: Routes = [
  {path: '', component:GroupsComponent},
  {path: 'enigma', component:EnigmaComponent},
  {path: 'form', component:BookFormComponent},
  {path: 'groupsix', component: GroupsixComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
