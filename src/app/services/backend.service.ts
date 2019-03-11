import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
//import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
//import { Observable ,  BehaviorSubject } from 'rxjs';
//import { Item } from './data.type';
//import 'rxjs/add/operator/switchMap';
//import 'rxjs/add/observable/combineLatest';

@Injectable({
  providedIn: 'root' 
})
export class BackendService {

  private _backendUrl ="http://localhost/php_api/connection_api.php?action=v";
  //private _backendUrl ="http://localhost/php_api/index.php?id";
  

  constructor(private _http:HttpClient) {}
    getData() {
      return this._http.get(this._backendUrl).pipe(
        tap(_ => this.log('test')),
        catchError(this.handleError())
      );
    }
    //private handleError<T>(operation = 'operation',result:? T){
    private handleError<T>(){
      //console.log("error");
      return null;
    }
    private log(menssage : string){
      //console.log("log");

    }
    
   
}
