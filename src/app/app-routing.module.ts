import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatFormComponent } from './component/catForm/cat-form/cat-form.component';
import { CatListComponent } from './component/catList/cat-list/cat-list.component';
import { NotFoundComponent } from './component/notFound/not-found/not-found.component';


const routes: Routes = [
  {path:"catForm", component: CatFormComponent},
  {path:"cat", component: CatListComponent},
  {path:"404", component: NotFoundComponent},
  {path:"**", redirectTo:"404"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
