import { Action } from '@ngrx/store'
import { ShoppingItem } from '../module/shopping-item-model';


export enum ShoppingActionTypes {
    ADD_ITEM = '[SHOPPING] Add Item',
    ADD_ITEM_SUCCESS = '[SHOPPING] Add Item Success',
    ADD_ITEM_FAILURE = '[SHOPPING] Add Item Failue'
}

export class AddItemAction implements Action {
    readonly type = ShoppingActionTypes.ADD_ITEM;
    constructor(public payload: ShoppingItem){

    }
}

export type ShppingAction = AddItemAction;