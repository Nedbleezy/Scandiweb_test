import { combineReducers } from 'redux';
import { allCategoriesReducer } from './allCategoriesReducer';
import { allCurrencyReducer } from './allCurrenciesReducer';
import { CartReducer } from './cartReducer';
import { ClothesProducts } from './clothesReducer';
import { ProductDetailsReducer } from './productDetailsReducer';
import { AllProducts } from './productListReducer';
import { SwitcherReducer } from './switcherReducer';
import { TechProductsReducer } from './techproductReducer';

const reducers = combineReducers({
  productList: AllProducts,
  clothes: ClothesProducts,
  tech: TechProductsReducer,
  productDetails: ProductDetailsReducer,
  cart: CartReducer,
  currencies: allCurrencyReducer,
  categories: allCategoriesReducer,
  switcher: SwitcherReducer,
});

export default reducers;
