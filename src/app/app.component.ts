import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/service/user-service.service';
import { profileModel } from './models/profileModel';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


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
  


  constructor(private http: HttpClient, private service: UserServiceService, public router : Router) {}

  ngOnInit(): void {
    
  }

  

  getById() {
    this.service.getById(this.id).subscribe((id) => {
      this.profile = id;
      console.log(this.profile);
    });
  }

  getByName() {
    this.service.getByName(this.name).subscribe((name) => {
      this.profile = name;
      console.log(this.profile);
    });
  }

  // method for creating a new tab on "click"
  //preventDefault() prevents the web page from refreshing and reseting state. And keeping the session current
  // add to main.ts to make globally usable
  navigate(event : Event, url : string) {
    event.preventDefault();
    window.open(url, "_blank");
  }

 
}
