import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/auths/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private loginService:LoginService,private router:Router) { 
    let loginUser =localStorage.getItem('user')

    if(loginUser != null)
    {
      this.loginService.user=JSON.parse(loginUser)
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
    this.router.navigateByUrl("/auths/login")
  }
}

git config --global user.email "you@example.com"
  git config --global user.name "Your Name"
