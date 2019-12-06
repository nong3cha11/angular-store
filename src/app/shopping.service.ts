import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators'
import { ShoppingItem } from './store/module/shopping-item-model';


@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  private Shoping_url = "http://localhost:3000/shopping";

  constructor(private http: HttpClient) { }

  getShoppingItems() {
    return this.http.get<Array<ShoppingItem>>(this.Shoping_url)
      .pipe(
        delay(500)
      )
  }

  addShoppingItem(shoppingItem: ShoppingItem) {
    return this.http.post(this.Shoping_url, shoppingItem)
      .pipe(
        delay(500)
      )
  }

  deleteShoppingItem(id: string) {
    return this.http.delete(`${this.Shoping_url}/${id}`)
      .pipe(
        delay(500)
      )
  }
}
