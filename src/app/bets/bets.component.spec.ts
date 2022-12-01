import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AppModule } from '../app.module';
import { AuthGuard } from '../services/auth.guard';
import { BetsService } from '../services/bets.service';

import { BetsComponent } from './bets.component';

fdescribe('BetsComponent', () => {
  let component: BetsComponent;
  let fixture: ComponentFixture<BetsComponent>;
  let el: DebugElement;
  let betsService: BetsService;
  let router: Router;

  beforeEach(waitForAsync(() => {
    const betsServiceSpy = jasmine.createSpyObj('BetsService', ['getBets']) 

    TestBed.configureTestingModule({
      imports: [
        AppModule
      ],
      providers: [
        { provide: Router, useValue: router },
        { provide: BetsService, useValue: betsServiceSpy }
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(BetsComponent);
      component = fixture.componentInstance;
      el = fixture.debugElement;
      betsService = TestBed.inject(BetsService);
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render table', () => {
    const table = el.queryAll(By.css('.bets'));
    expect(table.length).toBe(1, 'Table expected');
  });
  
});
