import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../model/user';
import { UserDomainService } from '../services/user-domain.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  user: User;
  shortLink: string = "";
  fileToUpload: File | null = null;
  constructor(private userService: UserDomainService,
    private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.user = new User();
  }

  saveUser() {
    
    this.userService.upload(this.fileToUpload).subscribe((data : any) => {
      console.log("data ", data.body)
      this.user.url = data.body;
      this.userService.saveUser(this.user).toPromise().then(() => {
    //   if (typeof (event) === 'object') {

    //       // Short link via api response
    //       this.shortLink = event.link;
    //   }
    // });
        this.router.navigate(['collection-listing']);
      }, error => {
        console.log(error);
      });
    });
  }

  selectedFile: File = null;  
 
  onFileSelected(event){
    const file:File = event.target.files[0];
    if(file){
        console.log("file name is ", file.name)
    }
      this.fileToUpload = event.target.files[0];
      console.log("file upload  name is ", this.fileToUpload.name)
  }

}