import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {

  id:number;
  editMode:boolean = false;
  @ViewChild('f') inputForm: NgForm;

  constructor(private route: ActivatedRoute) { }

  // onSubmit(aForm: NgForm){
  //   console.log(aForm);
  // }
  onSubmit(){
    console.log(this.inputForm);
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        console.log(this.editMode);
      }
    )
  }

  ngOnDestroy(){
    console.log("This destroy was triggered");
  }

}
