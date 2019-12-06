import { Component, OnInit } from '@angular/core';
import { AppState } from './store/module/app-state.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ShoppingItem } from './store/module/shopping-item-model';
import { AddItemAction, DeleteItemAction, LoadShoppingAction } from './store/actions/shopping-actions';
import { stringify } from 'querystring';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  shoppingItems: Observable<Array<ShoppingItem>>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>
  newShoppingItem: ShoppingItem = { id: '', name: '' };

  constructor(private store: Store<AppState>, private service: ShoppingService) { }

  ngOnInit() {
    this.shoppingItems = this.store.select(store => store.shopping.list);
    this.loading$ = this.store.select(store => store.shopping.loading);
    this.error$ = this.store.select(store => store.shopping.error);
    this.store.dispatch(new LoadShoppingAction());
  }

  addItem() {
    this.newShoppingItem.id = 'id' + Math.random();

    this.store.dispatch(new AddItemAction(this.newShoppingItem));
    console.log(this.newShoppingItem);

    this.newShoppingItem = { id: '', name: '' };
  }

  deleteItem(id: string) {
    this.store.dispatch(new DeleteItemAction(id));
  }
}
