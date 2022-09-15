import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/shared/models/login-user';
import { LoginService } from 'src/app/shared/services/auths/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private formBuilder:FormBuilder,private loginService:LoginService,private snackbar:MatSnackBar,private router:Router ) { }
  userLogin:LoginUser =new LoginUser();
  ngOnInit(): void {
  }


  loginForm = this.formBuilder.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(3)]]
  })

  get f(): {[key:string]:AbstractControl}{
    return this.loginForm.controls;
  }

  login(){
    //debugger
    var email:string= this.loginForm.value.email || ""
    this.loginService.getUser(email).subscribe((res)=>{
      console.log(res)
      if(res.length==0){
        this.snackbar.open("Kullanıcı bulunamadı","Ok",{
          duration:5000,
          verticalPosition: 'top',
          horizontalPosition:"right",
          panelClass:['danger-panel']
        });
      }
      else{
        if(res[0].password == this.loginForm.value.password)
        {
          this.loginService.user=res[0];
          localStorage.setItem('user',JSON.stringify(res[0]))
          this.router.navigateByUrl("/pages")
        }
        else{
          this.snackbar.open("Parolanız veya emailiz yanlış","Ok",{
            duration:5000,
            verticalPosition: 'top',
            horizontalPosition:"right",
            panelClass:['warning-panel']
          });
        }
      }
    })
  }
}
