import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/shared.component';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameinput') nameinputRef:ElementRef;
@ViewChild('amountinput') amountinputRef:ElementRef;
@Output() ingredientAdded=new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }
  Addingredient(){
const iname =this.nameinputRef.nativeElement.value;
const iamount =this.amountinputRef.nativeElement.value;
this.ingredientAdded.emit(new Ingredient(iname,iamount));
  }

}
