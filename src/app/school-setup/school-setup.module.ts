import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchoolSetupPageRoutingModule } from './school-setup-routing.module';

import { SchoolSetupPage } from './school-setup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchoolSetupPageRoutingModule
  ],
  declarations: [SchoolSetupPage]
})
export class SchoolSetupPageModule {}
