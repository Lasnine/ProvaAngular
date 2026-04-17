import { Injectable } from '@angular/core';
import { Api } from './api';
import { Observable } from 'rxjs';
import { IUser } from './interface/user';
import { ILogin } from './interface/Login';

@Injectable({
  providedIn: 'root',
})

export class AuthApi extends Api{
    login = (data: ILogin) : Observable<string> => {
        return this.client.post<string>(`${this.URL}/auth/login`, data).pipe();
    }
    subscribe = (data: IUser) : Observable<void> => {
        return this.client.post<void>(`${this.URL}/auth/subscribe`, data).pipe();
    }
}
