import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ShoppingReducer } from './store/reducers/shopping-reducer';

describe('AppComponent', () => {
  let component: AppComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot({
          shopping: ShoppingReducer
        }),
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should have add item', () => {
    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    expect(component.addItem()).toBe('Success');
  });
  // it('Check Oninit', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   component = fixture.componentInstance;
  //   expect(component.ngOnInit).toBeTruthy();
  // });
  // it('Check on delete Item', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   component = fixture.componentInstance;
  //   // spyOn(component, 'test').and.returnValue(10)
  //   expect(component.deleteItem(5)).toBeUndefined();
  // });

});
