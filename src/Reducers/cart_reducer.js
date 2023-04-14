import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { count, book } = action.payload;
    const newItem = {
      title: book.title,
      id: book._id,
      rating: book.rating,
      totalReviews: book.totalReviews,
      imageUrl: book.imageUrl,
      price: book.price,
      count,
    };
    return { ...state, cart: [...state.cart, newItem] };
  }
  if (action.type === REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: tempCart };
  }

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload;
    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        if (value === "inc") {
          let newAmount = item.count + 1;
          if (newAmount > item.max) {
            newAmount = item.max;
          }
          return { ...item, count: newAmount };
        }
        if (value === "dec") {
          let newAmount = item.count - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
          return { ...item, count: newAmount };
        }
      }
      return item;
    });
    return { ...state, cart: tempCart };
  }

  if (action.type === COUNT_CART_TOTALS) {
    const { total_items, total_count } = state.cart.reduce(
      (total, cartItem) => {
        const { count, price } = cartItem;
        total.total_items += count;
        total.total_count += price * count;

        return total;
      },
      {
        total_items: 0,
        total_count: 0,
      }
    );
    return { ...state, total_items, total_count };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
