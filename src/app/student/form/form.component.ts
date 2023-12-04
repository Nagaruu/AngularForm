import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/profile/shared/services/profile.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  studentForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {
    this.studentForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      dob: [''],
      phoneNumber: ['', []],
    });
  }

  handleFormSubmit() {
    if (this.studentForm.invalid) {
      return;
    }

    this.dataService.create(this.studentForm.getRawValue()).subscribe(e => {});

    this.dataService.setData(this.studentForm.value);
  }

}
