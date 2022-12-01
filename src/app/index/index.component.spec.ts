import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AppModule } from '../app.module';
import { AuthService } from '../services/auth.service';

import { IndexComponent } from './index.component';

describe('IndexComponent', () => {

  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;
  let el: DebugElement;
  let authService: any = undefined;

  beforeEach(waitForAsync( () => {
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['login']) 

    TestBed.configureTestingModule({
      imports: [
        AppModule
      ],
      declarations: [ 
        IndexComponent 
      ],
      providers: [
        {provide: AuthService, useValue: authServiceSpy}
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(IndexComponent);
      component = fixture.componentInstance;
      el = fixture.debugElement;
      authService = TestBed.inject(AuthService);
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
