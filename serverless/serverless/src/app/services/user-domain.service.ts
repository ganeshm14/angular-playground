import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Observable } from 'rxjs';
import {map} from 'rxjs/operators';

import { User } from '../model/user';

//Change the following URL with your own API Gateway URL.
const API_URL:string = 'https://ltfvvfmigl.execute-api.us-east-1.amazonaws.com/Dev/user';

@Injectable()
export class UserDomainService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(API_URL)
    .pipe(map((users: Array<any>)=>{
      let userMap:User[] = [];
      users && users.forEach((user)=>{
        userMap.push({
          collName: user['ac_collection_name'],
          collDesc: user['ac_collection_description'],
          squad: user['ac_squad'],
          url: user['ac_url'],
          id: user['id']
        });
      });
      return userMap;
    }));
  }

  deleteUser(collName: string) {
    return this.http.delete(API_URL,
      {
        params: {
          "collName": collName
        }
      });
  }

  saveUser(user: User) {
    console.log('user obj ',user)
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    let options = { headers: headers };
    return this.http.post(API_URL, user, options);
  }

  upload(fileToUpload: File){
    const endpoint = 'https://89ireywn53.execute-api.us-east-1.amazonaws.com/dev/upload';
    //let headers = new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*','Access-Control-Allow-Headers':'' });
    const formData: FormData = new FormData();
    console.log("file data ",fileToUpload.name);
    formData.append('file', fileToUpload, fileToUpload.name);
    return this.http
      .post(endpoint, fileToUpload, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
      
      
  }

}