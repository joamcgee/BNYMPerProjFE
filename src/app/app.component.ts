import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/service/user-service.service';
import { profileModel } from './models/profileModel';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Find Profile';
  
  profile : profileModel;

  id : string = "";
  name : string = "";
  


  constructor(private http: HttpClient, private service: UserServiceService) {}

  ngOnInit(): void {
    this.getById();
    this.getByName();
    
  }

  

  getById() {
    this.service.getById(this.id).subscribe((id) => {
      this.profile = id;
      console.log(id);
    });
  }

  getByName() {
    this.service.getByName(this.name).subscribe((name) => {
      this.profile = name;
      console.log(name);
    });
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
