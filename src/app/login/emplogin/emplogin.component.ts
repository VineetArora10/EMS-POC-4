import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-emplogin',
  templateUrl: './emplogin.component.html',
  styleUrls: ['./emplogin.component.css']
})
export class EmploginComponent implements OnInit {

  public EmpId: any;
  public EmpEmail: any;
  public EmpPassword: any;

  constructor(
    private router: Router,
    private auth: AuthService 
    ) { }

  ngOnInit(): void {
  }

  emplogin() {
    if(this.auth.emplogin(this.EmpId,this.EmpEmail,this.EmpPassword)){
      this.router.navigateByUrl('/edashboard');
  }
  }
}
