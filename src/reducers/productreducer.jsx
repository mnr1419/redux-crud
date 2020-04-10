const intialState = {
  products: [],
};

const ProductReducer = (state = intialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        products: state.products.concat([action.product]),
      };
    case "DELETE_PRODUCT":
      return {
        products: state.products.filter((p) => p.id !== action.id),
      };
    case "EDIT_PRODUCT":
      return {
        products: state.products.filter((product) => product.id === action.id),
      };
    // case "UPDATE_PRODUCT":
    //   return {
    //     id: action.product.id,
    //     name: action.product.name,
    //     price: action.product.price,
    //   };
    case "REPLACE_PRODUCT":
      //const product = action.product;
      // return {
      //   ...state,
      //   products: state.products.map((p) =>
      //     p.id === product.id ? product : p
      //   ),
      // };
      // return {
      //   ...state,
      //   products: state.products.map((product) => {
      //     if (product.id !== action.product.id) {
      //       return product;
      //     } else {
      //       return {
      //         ...product,
      //         name: action.product.name,
      //         price: action.product.price,
      //       };
      //     }
      //   }),
      // };

      let products = state.products.map((p) => {
        if (p.id === action.product.id) {
          return {
            ...p,
            name: action.product.name,
            price: action.product.price,
          };
        } else {
          return products;
        }
      });
      return {
        products: products,
      };

    default:
      return state;
  }
};
export default ProductReducer;
