import { Injectable } from '@angular/core';
import { localKeys } from '../../constants/localStorage.keys';
import { LocalStorageService } from '../localstorage.service';
import * as _ from 'lodash-es';
import jwt_decode from "jwt-decode";
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userDetail:any;
  baseUrl:any;
  userEvent = new Subject<any>();
  userEventEmitted$ = this.userEvent.asObservable();
  constructor(
    private localStorage: LocalStorageService,
    ) { 
      this.baseUrl = environment.baseUrl;
    }

  async getUserValue() {
    return this.localStorage
      .getLocalData(localKeys.USER_DETAILS)
      .then((data: any) => {
        this.userDetail=data;
        this.getCurrentUser(data.user);
        return data;
      })
      .catch((error) => { });
  }

  validateToken(token){
    const tokenDecoded: any = jwt_decode(token);
    const tokenExpiryTime = moment(tokenDecoded.exp * 1000);
    const currentTime = moment(Date.now());
    const duration = moment.duration(tokenExpiryTime.diff(currentTime));
    const hourDifference = duration.asHours();
    return (hourDifference < 2) ? false : true;
  }

  getCurrentUser(user){
    this.userEvent.next(user);
  }
  
}
