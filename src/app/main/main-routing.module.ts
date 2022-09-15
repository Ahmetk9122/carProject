import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path:"",component:MainComponent,
    children:[
      {path:"",component:HomeComponent},
      {path:"contact",component:ContactComponent},
      {path:"formula",loadChildren:()=>import("./formula/formula.module").then(m=>m.FormulaModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
