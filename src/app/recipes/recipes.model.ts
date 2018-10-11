export class Recipe{
    public name:string;
    public imagepath:string;
    public desc:string;

    constructor(name:string, imagepath:string, desc:string){
        this.desc=desc;
        this.imagepath=imagepath;
        this.name=name;
    }
}