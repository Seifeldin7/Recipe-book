import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipe.service';
import {ActivatedRoute,Params, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
   recipe:Recipe;
   id:number;
  constructor(private recipeservice:RecipeService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
     this.route.params.subscribe((params:Params)=>{
       
         this.id=+params['id'];
         this.recipe=this.recipeservice.getrecipe(this.id);
       
     });
  }
AddtoShop(){
this.recipeservice.AddingredientstoShop(this.recipe.ingredients);
}
onEditrecipe(){
this.router.navigate(['edit'],{relativeTo:this.route});
}
}
