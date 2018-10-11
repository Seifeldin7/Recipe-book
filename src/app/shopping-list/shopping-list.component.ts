import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/shared.component';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients: Ingredient[] =[
  new Ingredient('onion',1),new Ingredient('tuna',5)
];
  constructor() { }

  ngOnInit() {
  }
oniadded(ingredient: Ingredient){
this.ingredients.push(ingredient);
}
}
