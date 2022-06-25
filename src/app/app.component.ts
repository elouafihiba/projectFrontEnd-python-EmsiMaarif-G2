import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  sideList = [
    {
      nom: "Home",
      url: "dashboard",
      
    },
    {
      nom: "Adopter",
      url: "adopter",
      
    },

    {
      nom: "Donner",
      url: "donner",
      icon: "",
    },
    {
      nom: "Contact Us",
      url: "contact-Us",
      icon: "",
    },
  ]




}
