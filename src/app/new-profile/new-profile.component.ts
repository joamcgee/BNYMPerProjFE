import { HttpClient } from '@angular/common/http';
import { UserServiceService } from 'src/app/service/user-service.service';
import { Component, OnInit } from '@angular/core';
import { profileModel } from '../models/profileModel';

@Component({
  selector: 'app-new-profile',
  templateUrl: './new-profile.component.html',
  styleUrls: ['./new-profile.component.css']
})
export class NewProfileComponent implements OnInit {

  post : profileModel;

  constructor(private http: HttpClient, private service: UserServiceService) {}

  ngOnInit(): void {
    this.onCreateProfile;
  }

  onCreateProfile(postData: {id?: string; employee_Id: number; name: string; department: string; date_joined: Date; salary: number; skills: FillMode[]} ) {
    this.http.post(
      'http://localhost:8080/api/profile/saveProfile', 
       postData
       ).subscribe(responseData => {
        console.log(responseData);
       });

    
  }
}
