import { ShoppingItem } from "../module/shopping-item-model";
import { ShoppingActionTypes, AddItemAction } from '../actions/shopping-actions';

const intialState: Array<ShoppingItem> = [
  {
    id: 1,
    name: 'coke'
  }
];

export function ShoppingReducer(state: Array<ShoppingItem> = intialState, action: AddItemAction) {
  switch (action.type) {
    case ShoppingActionTypes.ADD_ITEM:
      return [...state, action.payload];
    default:
      return state;
  }

}