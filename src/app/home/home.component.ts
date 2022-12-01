import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  public ngOnInit(): void {
  }

  public goToBets(): void {
    this.router.navigate(['/bets']);
  }
  
  public logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('bets');
    this.router.navigate(['/index']);
  }

}
