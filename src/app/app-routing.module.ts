import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NamesComponent } from './names/names.component';

const routes: Routes = [
  { path: '', redirectTo: '/names', pathMatch: 'full' },
  { path: 'names', component: NamesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
