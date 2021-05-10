import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-dashboard',
  templateUrl: './e-dashboard.component.html',
  styleUrls: ['./e-dashboard.component.css']
})
export class EDashboardComponent implements OnInit {

  public obj=JSON.parse(localStorage.getItem("currentuser"));
  public ename=this.obj.name;
  public eid=this.obj.id;
  public edept=this.obj.department;
  constructor() { }

  ngOnInit(): void {
  }

  edit() {
      
  }
  
  

}
