import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 
recipes: Recipe[];

  constructor(private recipeservice: RecipeService, private router:Router, private route:ActivatedRoute ) { }

  ngOnInit() {
    this.recipes=this.recipeservice.getRecipe();
  }
  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo: this.route});
  }
}
