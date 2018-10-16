import { Ingredient } from '../shared/shared.component';

export class ShoppinglistService {
    private ingredients: Ingredient[] = [
        new Ingredient('onion', 1), new Ingredient('tuna', 5)
    ];
    oniadded(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }
    getIngredients(){
        return this.ingredients;
    }
    addingredients(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients);
    }
}