import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router
  ) { }

  adminlogin(email, pass) {
    if(email == "admin@mail" && pass == "password") {
      localStorage.setItem("admin","pass");
        return true;
    }
    this.router.navigateByUrl('');
    return false;
  }

  details = [
    {name:"vineet", id:1, department:"tech", email:"vineet@mail", password:"pass1"},
    {name:"shubham", id:2, department:"tech", email:"shubham@mail", password:"pass2"},
    {name:"sagar", id:3, department:"sales", email:"sagar@mail", password:"pass3"},
    {name:"prashant", id:4, department:"sales", email:"prashant@mail", password:"pass4"},
    {name:"aman", id:5, department:"tech", email:"aman@mail", password:"pass5"}
  ]

  emplogin(id, email, password)
  {
    if(JSON.parse(localStorage.getItem("data"))){
      this.details=JSON.parse(localStorage.getItem("data"));
    }
    for(let i=0;i<this.details.length;i++){
      if(id==this.details[i].id && email==this.details[i].email && password==this.details[i].password){
        localStorage.setItem("currentuser",JSON.stringify(this.details[i]));
        return true;
      }
    }
    this.router.navigateByUrl('');
    return false;
  }
}
