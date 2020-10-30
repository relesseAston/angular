import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CatServiceService } from 'src/app/service/cat-service.service';

@Component({
  selector: 'app-cat-form',
  templateUrl: './cat-form.component.html',
  styleUrls: ['./cat-form.component.scss']
})
export class CatFormComponent implements OnInit {

  catForm : FormGroup;

  constructor(private fb: FormBuilder, private catService: CatServiceService, private router: Router) { }

  ngOnInit(): void {
    this.generateCatForm();
  }

  generateCatForm() {
    this.catForm = this.fb.group({
      nom:['', Validators.required],
      age:['', Validators.required],
      race:['', Validators.required],
      vivant:['', Validators.required]
    })
  }

  onSubmit(){
    if(this.catForm.valid){
      console.log(this.catForm.value);
      this.catService.create(this.catForm.value).then(() => {
        this.router.navigate(["/cat"]);
      })
      .catch((err) => {
        console.log("err : ", err);
      });
      
    }

    else {
      alert('Certains champs ne sont pas remplis');
    }
    
  }

}
