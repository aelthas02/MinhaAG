import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AppModule } from '../app.module';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let el: DebugElement;
  let router = {
    navigate: jasmine.createSpy('navigate')
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ],
      providers: [
        { provide: Router, useValue: router }
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(HomeComponent);
      component = fixture.componentInstance;
      el = fixture.debugElement;
    });
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the menu buttons', () => {
    const buttons = el.queryAll(By.css('.btn'));
    expect(buttons.length).toBe(2, 'Unexpected number of tabs');
  });

});
