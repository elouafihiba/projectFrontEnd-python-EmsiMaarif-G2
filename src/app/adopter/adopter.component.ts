import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


const lp = [

  {nom: 'Moro', prenom: 'Chris', age: '1 ', image:'1.jpg'},
  {nom: 'Dz', prenom: 'Nitrogen', age: '3', image: '19.jpg'},
  {nom: 'harder', prenom: 'Alex', age: '3', image: '20.jpg'},
  {nom: 'beathoven', prenom: 'lium', age: '4 ', image: '2.jpg'},
  {nom: 'white', prenom: 'Lala', age: '2 ', image: '3.jpg'},
  {nom: 'gap', prenom: 'Bery', age: '2 ', image: '4.webp'},
  {nom: 'papa', prenom: 'Jan', age: '3', image: '18.jpg'},
  {nom: 'fast', prenom: 'Boron', age: '9 ', image: '5.jpg'},
  {nom: 'js', prenom: 'Golden', age: '3', image: '17.jpg'},
  {nom: 'bat', prenom: 'Carbon', age: '6', image: '6.jpg'},
  {nom: 'simon', prenom: 'Green', age: '3', image: '7.jpg'},
  {nom: 'david', prenom: 'Rogen', age: '3', image: '8.webp'},
  {nom: 'marly', prenom: '', age: '3', image: '9.jpg'},
  {nom: 'by', prenom: 'Roma', age: '3', image: '10.jpg'},
  {nom: 'madona', prenom: 'Jazz', age: '3', image: '11.jpg'},
  {nom: 'mz', prenom: 'Diva', age: '3', image: '12.jpg'},
  {nom: 'ld', prenom: 'Leo', age: '3', image: '13.jpg'},
  {nom: 'cruz', prenom: 'Nana', age: '3', image: '14.jpg'},
  {nom: 'rodriguez', prenom: 'Snow', age: '3', image: '15.jpg'},
  {nom: 'boy', prenom: 'Black', age: '3', image: '16.jpg'},

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
