import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserLogin } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(user: UserLogin): Observable<any>{
    return of({})
  }
}
