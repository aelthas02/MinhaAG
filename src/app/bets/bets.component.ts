import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { BetsService } from '../services/bets.service';
import { Bet } from '../services/DTOs/Bet';

@Component({
  selector: 'app-bets',
  templateUrl: './bets.component.html',
  styleUrls: ['./bets.component.scss']
})
export class BetsComponent implements OnInit {

  public bets$!: Observable<Bet[]>;
  public bets: string[] = [];

  constructor(
    private betsService: BetsService,
    private router: Router
  ) { }

  public ngOnInit(): void {
    let bets: string = localStorage.getItem('bets') ? '' + localStorage.getItem('bets') : '';
    this.bets = bets === '' ? [] : bets.split(',');
    this.getBets();
  }

  public return(): void {
    this.router.navigate(['/home']);
  }

  private getBets(): void {
    const betsList$ = this.betsService.getBets().pipe();
    this.bets$ = betsList$.pipe(map(bets => bets.filter(bet => this.bets.includes(bet.id.toString()))));
  }

}
