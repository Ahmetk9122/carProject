import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/auths/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  loginUser:any=[]
  constructor(private loginService:LoginService,private router:Router) {
    this.loginUser=this.loginService.user
    let loginUser =localStorage.getItem('user')
    //debugger
    if(loginUser != null)
    {
      this.loginService.user=JSON.parse(loginUser)
      console.log(JSON.parse(loginUser))
    }
    else
    {
      this.router.navigateByUrl("/auths/login")
    }
  }

  
  
  ngOnInit(): void {
  }

  logout(){
    this.loginService.user=undefined;
    localStorage.removeItem('user')
    console.log(localStorage.getItem('user'))
    this.router.navigateByUrl("/auths/login")
  }
}
