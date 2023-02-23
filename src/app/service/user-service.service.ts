import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { profileModel } from 'src/app/models/profileModel';

@Injectable({
    providedIn: 'root'
  })
  export class UserServiceService {
    profile : profileModel;
  
    baseUrl = "http://localhost:8080/api"
  
    constructor(private http: HttpClient) { }



    getById(id : string){
        return this.http.get<profileModel>(`${this.baseUrl}/profile/get-profile-by-id?profile_id=${id}`)
    }

    getByName(name : string){
      return this.http.get<profileModel>(`${this.baseUrl}/profile/name?name=${name}`)
    }

      
}    







