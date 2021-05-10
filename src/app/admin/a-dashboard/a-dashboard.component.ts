import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-a-dashboard',
  templateUrl: './a-dashboard.component.html',
  styleUrls: ['./a-dashboard.component.css']
})
export class ADashboardComponent implements OnInit {

  public ename: any;
  public eid: any;
  public edept: any;
  public email: any;
  public epass: any;
  public data = JSON.parse(localStorage.getItem("data"));
  details = {};
  index=this.data.length;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  add() {
    this.details={name:this.ename, id:this.eid, department:this.edept, email:this.email, password:this.epass, index:this.index}
    this.data.push(this.details);
    localStorage.setItem("data",JSON.stringify(this.data));
    this.index++;
  }

  delete(delindex) {
    this.data.splice(delindex, 1);
    for (let i = delindex; i < this.data.length; i++) {
      this.data[i].index--;
    }
    this.index = this.data.length;
    localStorage.setItem("data", JSON.stringify(this.data));
  }
  edit(index) {
    this.ename = this.data[index].name;
    this.eid = this.data[index].id;
    this.email = this.data[index].email;
    this.edept = this.data[index].department;
    this.epass = this.data[index].password;
    // this.isclicked = true;
    this.index = index;
  }
  update() {
    this.details = { name: this.ename, id: this.eid, department: this.edept, email: this.email, password: this.epass, index: this.index }
    this.data[this.index] = this.details;
    localStorage.setItem("data", JSON.stringify(this.data));
    // this.isclicked = false;
    this.ename = '';
    this.eid = '';
    this.edept = '';
    this.email = '';
    this.epass = '';
  }
  row(index) {
    this.router.navigate(['/employeedata', +`${this.data[index].id}`]);
    localStorage.setItem("clickeduser", JSON.stringify(this.data[index]));
  }
}
