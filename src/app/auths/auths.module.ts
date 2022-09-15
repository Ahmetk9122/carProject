import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthsRoutingModule } from './auths-routing.module';
import { AuthsComponent } from './auths.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule} from '@angular/material/snack-bar'

@NgModule({
  declarations: [
    AuthsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatSnackBarModule
  ],
})
export class AuthsModule { }
