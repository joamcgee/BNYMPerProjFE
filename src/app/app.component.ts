import { Component } from '@angular/core';
import { UserServiceService } from 'src/service/user-service.service';
import { profileModel } from './models/profileModel';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BNYMPerProjFE';
  
  profile : profileModel;

  id : string = "";
  name : string = "";


  constructor(private service: UserServiceService) {}

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

}
