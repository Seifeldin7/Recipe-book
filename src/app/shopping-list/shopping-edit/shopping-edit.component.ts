import { Component, OnInit, EventEmitter, Output, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/shared.component';
import { ShoppinglistService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slform: NgForm;
  subscription: Subscription;
  editmode = false;
  itemindex: number;
  editeditem: Ingredient;
  constructor(private shoppingservice: ShoppinglistService) { }

  ngOnInit() {
    this.subscription = this.shoppingservice.startedediting.subscribe(
      (index: number) => {
        this.itemindex = index;
        this.editmode = true;
        this.editeditem = this.shoppingservice.getIngredient(index);
        this.slform.setValue({
          name: this.editeditem.name,
          amount: this.editeditem.amount
        })
      }
    );
  }
  Addingredient(form: NgForm) {
    const val = form.value;
    const newIngredient = new Ingredient(val.name, val.amount);
    if (this.editmode) {
      this.shoppingservice.updateingredient(this.itemindex, newIngredient);
    } else {
      this.shoppingservice.oniadded(new Ingredient(val.name, val.amount));
    }
    this.editmode = false;
    form.reset();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onreset() {
    this.slform.form.reset();
    this.editmode = false;
  }
  ondelete(){
    this.shoppingservice.removeingredient(this.itemindex);
    this.onreset();
    
  }
}
