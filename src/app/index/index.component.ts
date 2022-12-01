import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../services/DTOs/User';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  
  public form = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  public ngOnInit(): void {
  }

  public login(): void {
    if (!this.form.invalid) {
      this.authService.login(this.form.get('username')?.value).subscribe(
        success => this.isLoggedin(success),
        error => alert(error.status + ': ' + error.statusText)
      );  
    }  
  }

  private isLoggedin(user: any): void { 
    if (user.length > 0 && this.authService.isAuthenticated(user, this.form.get('password')?.value)) {
      localStorage.setItem('bets', user[0].bets);
      this.router.navigate(['/home']);
    } else {
      alert('Usuário não localizado');
    }
  }

}
