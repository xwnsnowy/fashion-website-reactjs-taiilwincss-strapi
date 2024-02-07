import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["cart"], // Chỉ lưu trữ trạng thái của cartReducer
};

// Kết hợp các reducers thành một rootReducer duy nhất.
// productReducer và cartReducer được kết hợp thành rootReducer,
// với mỗi reducer quản lý một phần của trạng thái Redux.
const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Dược sử dụng để tạo ra một Persistor,
// là một đối tượng dùng để khởi động và theo dõi quá trình lưu trữ và khôi phục trạng thái Redux từ lưu trữ cục bộ.
let persistor = persistStore(store);

export { store, persistor };
