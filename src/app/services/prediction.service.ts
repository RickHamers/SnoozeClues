import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {

  private prediction$ = new Subject<number>();
  private isLoading$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  public getPrediction(hours: number, tired: number, phoneUsed: number, phoneReach: number) {
    this.isLoading$.next(true);
    return this.http.post(`${environment.apiUrl}/api/prediction`, {
      hours,
      phoneUsed,
      phoneReach,
      tired
    });
  }
}
