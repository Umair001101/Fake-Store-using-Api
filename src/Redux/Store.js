import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux'; 
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';
import productsReducer from "./productsSlice";  
import cartReducer from "./CartSlice";       
import authorizationReducer from "./AuthorizationSlice";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  authorization: authorizationReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'authorization'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);