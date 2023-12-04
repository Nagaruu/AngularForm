import { Component, OnInit } from '@angular/core';
import { IProfile } from 'src/app/profile/shared/interface/profile';
import { DataService } from 'src/app/profile/shared/services/profile.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  submittedData: IProfile[] = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getAll().subscribe((e) => {
      this.submittedData = e;
    });
  }
  
}
