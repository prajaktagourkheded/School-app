import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchoolSetupPage } from './school-setup.page';

const routes: Routes = [
  {
    path: '',
    component: SchoolSetupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchoolSetupPageRoutingModule {}
