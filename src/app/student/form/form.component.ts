import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProfile } from 'src/app/profile/shared/interface/profile';
import { DataService } from 'src/app/profile/shared/services/profile.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  studentForm: FormGroup = new FormGroup({});
  submittedData: IProfile[] = [];
  
  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {
    this.studentForm = this.formBuilder.group({
      id: [],
      name: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      email: ['']
    });
  }

  loadSubmittedData() {
    this.dataService.getAll().subscribe((e) => {
      this.submittedData = e;
    });
  }

  handleFormSubmit() {
    if (this.studentForm.invalid) {
      return;
    }

    // POST
    this.dataService.create(this.studentForm.getRawValue()).subscribe(() => {
      this.loadSubmittedData();
    });

    // PUT
    if (this.studentForm.get('id')) {
      this.dataService.update(6, this.studentForm.getRawValue()).subscribe(() => {});
    }

    // DELETE
    if (this.studentForm.get('id')) {
      this.dataService.delete(5).subscribe(() => {});
    }

    this.dataService.setData(this.studentForm.value);
  }
}
