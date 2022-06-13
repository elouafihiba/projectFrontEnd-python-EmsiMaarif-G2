import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    // Image: new FormControl('', Validators.required),

  });

  constructor(private http: HttpClient) {
    console.log("from constructor");

  }


  ngOnInit(): void {
    console.log("from ngONinit");
    this.http.get("http://192.168.1.26:8000/api/pets?format=json").subscribe((res: any) => {
      this.listPets = res
      console.log("from API", this.listPets);

    });

  }
  onSubmit() {
    console.log("clicked", this.AddPetForm.value)
    this.http.post("http://192.168.1.26:8000/api/pets?format=json", this.AddPetForm.value).subscribe((res: any) => {
      this.listPets.push(res)
      console.log("from API", this.listPets)

    });
  }

}
