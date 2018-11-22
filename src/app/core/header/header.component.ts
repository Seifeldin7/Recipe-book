import { Component, Output, EventEmitter } from "@angular/core";
import { recipeStorage } from "../../shared/recipe-storage.service";
import {Response} from "@angular/http";
import { AuthService } from "../../auth/auth.service";
@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
})
export class HeaderComponent{
    constructor(private recipestoragesl:recipeStorage,private authsl:AuthService){}
    onSaveData(){
        this.recipestoragesl.storeRecipe().subscribe(
            (response:Response) =>{
                console.log(response);
            }
        );
    }
    ongetData(){
        this.recipestoragesl.getRecipe();
    }
    onLogout(){
        this.authsl.logout();
    }
    isAuthenticated() {
        return this.authsl.isAuthenticated();
      }
}