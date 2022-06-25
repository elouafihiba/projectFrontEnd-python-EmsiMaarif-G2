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
      nom: "Adopt",
      url: "adopt",
      
    },

    {
      nom: "Why Adopting ?",
      url: "whyadopting",
      icon: "",
    },
    {
      nom: "Contact Us",
      url: "contact-Us",
      icon: "",
    },
  ]




}
