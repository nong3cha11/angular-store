import { Component, OnInit } from '@angular/core';
import { AppState } from './store/module/app-state.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ShoppingItem } from './store/module/shopping-item-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.shopingItem = this.store.select(store => store.shopping);
    console.log(this.shopingItem);
    
  }
  shopingItem: Observable<Array<ShoppingItem>>;
  title = 'ngrx-shopping-list';
  constructor(private store: Store<AppState>) {

  }
}
