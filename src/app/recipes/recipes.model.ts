import { Ingredient } from "../shared/shared.component";

export class Recipe{
    public name:string;
    public imagepath:string;
    public desc:string;
    public ingredients:Ingredient[];

    constructor(name:string, imagepath:string, desc:string, ingredients:Ingredient[]){
        this.desc=desc;
        this.imagepath=imagepath;
        this.name=name;
        this.ingredients=ingredients;
    }
}