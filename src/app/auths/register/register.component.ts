import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { debounce } from 'rxjs';
import { Register } from 'src/app/shared/models/register';
import { RegisterService } from 'src/app/shared/services/auths/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private registerService:RegisterService ,private snackbar:MatSnackBar ) { }
  regester:Register =new Register();
  ngOnInit(): void {
    
  }

  registerForm = this.formBuilder.group({
    name:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(3)]]
  })

  get f(): {[key:string]:AbstractControl}{
    return this.registerForm.controls
  }
  createAccount(){
    var loginFormNameValue:string = this.registerForm.value.name || ""
    var loginFormEmailValue:string = this.registerForm.value.email || ""
    var loginFormPasswordValue:string = this.registerForm.value.password || ""
    this.regester.fullname=loginFormEmailValue,
    this.regester.email=loginFormEmailValue,
    this.regester.password=loginFormPasswordValue,
    this.registerService.createAccount(this.registerForm.value).subscribe((res)=>{
      this.snackbar.open("Kullanıcı Başarıyla Kaydedildi.","Ok",{
        duration:5000,
        verticalPosition: 'top',
        horizontalPosition:"right",
        panelClass:['success-panel']
      });
    })
  }
}
