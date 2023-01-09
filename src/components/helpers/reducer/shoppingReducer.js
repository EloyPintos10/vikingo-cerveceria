
import { TYPES } from "../actions/ShoppingActions";
const URL = process.env.REACT_APP_API_RAGNAR;

 

//export const shoppingInitialState = {
 //  products: [
   // {id:1, nombre: "producto1", precio:100}, 
   // {id:2, nombre: "producto2", precio:200}, 
   // {id:3, nombre: "producto3", precio:300}, 
  //  {id:4, nombre: "producto4", precio:400} 
  // ], cart: [],
//}
export const shoppingInitialState = {
  products: [],
   cart: [],
}

export function shoppingReducer (state,action){
    switch (action.type) {
        case TYPES.ADD_TO_CART:{
            let newItem = state.products.find(product => product.id === action.payload);
            //console.log(newItem);
            let itemInCart = state.cart.find(item => item.id === newItem.id)
            return itemInCart ?{
                ...state,
                cart: state.cart.map(item=>item.id===newItem.id ? {...item,quantity:item.quantity + 1
                }: item)
            }:{...state,
                cart:[...state.cart, {...newItem,quantity:1}],
            };
         

              
          
          


        }
        case TYPES.REMOVE_ONE_FORM_CART:{
            let itemToDelete = state.cart.find(item => item.id === action.payload);
            return itemToDelete.quantity > 1? {
                ...state,
                cart:state.cart.map(item => item.id=== action.payload? {...item,quantity: item.quantity -1}:item),
            }
             : {...state,
            cart: state.cart.filter((item) => item.id !== action.payload)};
        }
        case TYPES.REMOVE_ALL_FORM_CART:{
            return{
                ...state,
            cart: state.cart.filter((item) => item.id !== action.payload)};
            }
        
        case TYPES.CLEAR_CART:
            return shoppingInitialState;
        
        default: return state;
            
            
    }
}


