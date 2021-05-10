import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainlogin',
  templateUrl: './mainlogin.component.html',
  styleUrls: ['./mainlogin.component.css']
})
export class MainloginComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  gotoemplogin() {
    this.router.navigateByUrl('emplogin');
  }

  gotoadminlogin() {
    this.router.navigateByUrl('adminlogin');
  }
}
