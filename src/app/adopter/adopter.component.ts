import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


const lp = [

  {nom: 'a', prenom: 'Hydrogen', age: '1 ans', image:'1.jpg'},
  {nom: 'h', prenom: 'Nitrogen', age: '3mois', image: '19.jpg'},
  {nom: 'h', prenom: 'Nitrogen', age: '3mois', image: '20.jpg'},
  {nom: 'b', prenom: 'Helium', age: '4 ans', image: '2.jpg'},
  {nom: 'c', prenom: 'Lithium', age: '2 ans', image: '3.jpg'},
  {nom: 'd', prenom: 'Beryllium', age: '2 mois', image: '4.webp'},
  {nom: 'h', prenom: 'Nitrogen', age: '3mois', image: '18.jpg'},
  {nom: 'f', prenom: 'Boron', age: '9 mois', image: '5.jpg'},
  {nom: 'h', prenom: 'Nitrogen', age: '3mois', image: '17.jpg'},
  {nom: 'j', prenom: 'Carbon', age: '6 mois', image: '6.jpg'},
  {nom: 'h', prenom: 'Nitrogen', age: '3mois', image: '7.jpg'},
  {nom: 'h', prenom: 'Nitrogen', age: '3mois', image: '8.webp'},
  {nom: 'h', prenom: 'Nitrogen', age: '3mois', image: '9.jpg'},
  {nom: 'h', prenom: 'Nitrogen', age: '3mois', image: '10.jpg'},
  {nom: 'h', prenom: 'Nitrogen', age: '3mois', image: '11.jpg'},
  {nom: 'h', prenom: 'Nitrogen', age: '3mois', image: '12.jpg'},
  {nom: 'h', prenom: 'Nitrogen', age: '3mois', image: '13.jpg'},
  {nom: 'h', prenom: 'Nitrogen', age: '3mois', image: '14.jpg'},
  {nom: 'h', prenom: 'Nitrogen', age: '3mois', image: '15.jpg'},
  {nom: 'h', prenom: 'Nitrogen', age: '3mois', image: '16.jpg'},

]


@Component({
  selector: 'app-adopter',
  templateUrl: './adopter.component.html',
  styleUrls: ['./adopter.component.scss']
})
export class AdopterComponent implements OnInit {
  listPets: Array<any>;

  AddPetForm = new FormGroup({
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    // image: new FormControl('', Validators.required),

  });

  constructor(private http: HttpClient) {
    console.log("from constructor");

  }


  ngOnInit(): void {
    console.log("from ngONinit");
    // this.http.get("http://127.0.0.1:8000/api/pets?format=json").subscribe((res: any) => {
    //   this.listPets = res
    //   console.log("from API", this.listPets);

    // });
this.listPets=lp 

  }
  onSubmit() {
    console.log("clicked", this.AddPetForm.value)
    // this.http.post("http://127.0.0.1:8000/api/pets?format=json", this.AddPetForm.value).subscribe((res: any) => {
    //   this.listPets.push(res)
    //   console.log("from API", this.listPets)

    // });
    this.listPets.push(this.AddPetForm.value)
  }

}
