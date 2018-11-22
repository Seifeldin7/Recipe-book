import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/shared.component';
import { ShoppinglistService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients :Ingredient[];

  constructor(private shoppingservice: ShoppinglistService) { }

  ngOnInit() {
    this.ingredients=this.shoppingservice.getIngredients();
    
  }
onEditItem(i:number){
  this.shoppingservice.startedediting.next(i);
}

}
