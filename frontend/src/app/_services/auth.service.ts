import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router,private http:HttpClient) { }

  rootURL = '/api/v1/JA'


  isauthenticated() {
    if (sessionStorage.getItem('token') !== null) {
      return true;
    }
    return true;    // this function retrun the true value means we can't access main page directly other wise false means we can access directly
  }

  // this set of code is use to block the direct access of main page
  canAccess() {
    if (this.isauthenticated()) {
      this.router.navigate(["login"])
    }
  }

// ------------------------------------------------------------------------------------

addUser(uesr:any){
  return this.http.post(this.rootURL+'/',{uesr});
}
  



}
