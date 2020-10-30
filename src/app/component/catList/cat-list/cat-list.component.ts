import { Component, OnInit } from '@angular/core';
import { Cat } from 'src/app/model/Cat';
import { CatServiceService } from 'src/app/service/cat-service.service';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.scss']
})
export class CatListComponent implements OnInit {

  catList : Cat[] = [];

  constructor(private catService : CatServiceService) { }

  ngOnInit(): void {
    this.getAllCat();
  }

  getAllCat() {
    this.catService.getAll().subscribe(data => {
      this.catList = data;
      console.log(this.catList);
    });
  }

  supprimer(id:number) {
    var cat_id:number;
    this.catService.delete(id).then(() => {
      this.catList = this.catList.filter(cat => cat_id = cat.id=id);
    })
    .catch((err) => {
      console.log("err", err);
    })
  }

}
