import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainModule } from './main/main.module';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:"auths",
  loadChildren:()=> import("./auths/auths.module").then(m=>m.AuthsModule)},
  {path:"pages",
  loadChildren:()=>import("./main/main.module").then(m=>MainModule)},
  {path:"404",component:NotfoundComponent},
  {path:"",redirectTo:"/auths/login",pathMatch:"full"},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
