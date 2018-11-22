import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  LoadedFeature="recipe";
  title = 'myapp';
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyB_GCVSY6KD2tW8wVzP-Sol-6fLucC11nk",
      authDomain: "recipes-ff579.firebaseapp.com",
    });
  }
  onNavigate(feature:string){
this.LoadedFeature=feature;
  }
}
