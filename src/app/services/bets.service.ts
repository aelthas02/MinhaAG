import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { Bet } from './DTOs/Bet';

@Injectable({
  providedIn: 'root'
})
export class BetsService {

  constructor(
    private http: HttpClient
  ) { }

  public getBets(): Observable<Bet[]> {
    return this.http.get<Bet[]>('/api/bets').pipe(
      shareReplay()
    );
  }
}
