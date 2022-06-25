import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdopterComponent } from './adopter/adopter.component';
import { ContactUsComponent } from './ContactUs/contact-us/contact-us.component';
import { DonnerComponent } from './whyAdopting/donner.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  {
    path: "dashboard",
    component: HomeComponent
  },
  {
    path: "adopter",
    component: AdopterComponent
  },
  {
    path: "donner",
    component: DonnerComponent
  },
  {
    path: "contact-Us",
    component: ContactUsComponent
  },
  {
    path: "login",
    component: LoginComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
