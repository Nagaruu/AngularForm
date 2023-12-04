import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

import { ProfileRoutingModule } from './profile-routing.module';
import { StudentComponent } from '../student/student.component';
import { FormComponent } from '../student/form/form.component';
import { DetailComponent } from '../student/detail/detail.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './shared/services/profile.service';

@NgModule({
  declarations: [
    StudentComponent,
    FormComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProfileRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
})
export class ProfileModule {}