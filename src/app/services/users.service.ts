import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {user} from './../model/user';

// Import RxJs required methods
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

@Injectable()
export class UsersService{
    
     private users = '/users';
    
    constructor(private http:Http){
        
    }
    getUsers() : Observable<user[]>{
         // ...using get request
         var result=this.http.get(this.users)
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
         return result;
        
     }
    
}