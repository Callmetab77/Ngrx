import { createAction, props } from "@ngrx/store";
import { Product } from "../product";

//typing the action / defining the actions
export const toggleProductCode = createAction(
    '[Product] Toggle Product Code'
);
export const setCurrentProduct = createAction(
    '[Product] Set Current Product',
    props<{ product: Product }>()
);
export const clearCurrentProduct = createAction(
    '[Product] Clear Current Product]'
);
export const initCurrentProduct = createAction(
    '[Product] Initialize Current Product]'
);

export const loadProducts = createAction(
    '[Product] Load'
);

export const loadProductsSuccess = createAction(
    '[Product] Load Success',
    props<{products: Product[]}>()  
);

export const loadProducstFailure = createAction(
    '[Product] Load Failed',
    props<{error: string}>()
);

