import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyBooksComponent } from './my-books/my-books.component';

const routes: Routes = [
  { path: 'my-books', component: MyBooksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
