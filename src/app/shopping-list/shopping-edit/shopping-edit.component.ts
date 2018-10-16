import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/shared.component';
import { ShoppinglistService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameinput') nameinputRef:ElementRef;
@ViewChild('amountinput') amountinputRef:ElementRef;
@Output() ingredientAdded=new EventEmitter<Ingredient>();
  constructor(private shoppingservice :ShoppinglistService) { }

  ngOnInit() {
  }
  Addingredient(){
const iname =this.nameinputRef.nativeElement.value;
const iamount =this.amountinputRef.nativeElement.value;
this.shoppingservice.oniadded(new Ingredient(iname,iamount));
  }

}
