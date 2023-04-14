import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private http: HttpClient, private service: UserServiceService, public router : Router) {}
  

  ngOnInit(): void {
  }

  navigate(event : Event, url : string) {
    event.preventDefault();
    window.open(url, "_blank");
  }
}
