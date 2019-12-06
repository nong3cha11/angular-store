import { ShoppingItem } from "../module/shopping-item-model";
import { ShoppingActionTypes, AddItemAction, DeleteItemAction, ShoppingAction, EditItemAction } from '../actions/shopping-actions';

export interface ShoppingState {
  list: ShoppingItem[],
  loading: boolean,
  error: Error
}

const initialState: ShoppingState = {
  list: [],
  loading: false,
  error: undefined
};
export function ShoppingReducer(state: ShoppingState = initialState
  , action: ShoppingAction) {
    console.log(state, action);

  switch (action.type) {
    case ShoppingActionTypes.LOAD_SHOPPING:
      return {
        ...state,
        loading: true
      }
    case ShoppingActionTypes.LOAD_SHOPPING_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false
      }

    case ShoppingActionTypes.LOAD_SHOPPING_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      }

    case ShoppingActionTypes.ADD_ITEM:
      return {
        ...state,
        loading: true
      }
    case ShoppingActionTypes.ADD_ITEM_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
        loading: false
      };
    case ShoppingActionTypes.ADD_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case ShoppingActionTypes.DELETE_ITEM:
      return {
        ...state,
        loading: true
      };
    case ShoppingActionTypes.DELETE_ITEM_SUCCESS:
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.payload),
        loading: false
      }
    case ShoppingActionTypes.DELETE_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    case ShoppingActionTypes.EDIT_ITEM:
      return {
        ...state,
        loading: true
      }
    case ShoppingActionTypes.EDIT_SUCCESS:
      state.list.forEach(item => {
        if(item.id == action.payload.id){
          item.name = action.payload.name;
        }
      })
      return {
        ...state,
        list: [...state.list],
        loading: false
      };
    case ShoppingActionTypes.EDIT_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
