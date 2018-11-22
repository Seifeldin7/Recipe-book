import { Injectable } from "@angular/core";
import * as firebase from 'firebase';
import { Router } from "@angular/router";

@Injectable()
export class AuthService {
    token:string;

    constructor(private router :Router){}
    signupuser(email:string,pasword:string){
        firebase.auth().createUserWithEmailAndPassword(email,pasword).catch(
            error =>console.log(error)
        );
    }
    signinuser(email:string,pasword:string){
        firebase.auth().signInWithEmailAndPassword(email,pasword).then(
            response =>{
                this.router.navigate(['/']);
                firebase.auth().currentUser.getIdToken().then(
                    (token:string) => this.token=token
                );
            }
        ).catch(
            error =>console.log(error)
        );
    }
    logout() {
        firebase.auth().signOut();
        this.token = null;
      }
    getToken(){
        firebase.auth().currentUser.getIdToken().then(
            (token:string) => this.token=token
        );
        return this.token;
    }
    isAuthenticated(){
        return this.token!=null;
    }
}