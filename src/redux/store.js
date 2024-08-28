import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filter/filterReducer";
import { contactsReducer } from "./contacts/contactsReducer";
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

const contactsConfig = {
  key: "contacts",
  storage,
  whitelist: ["contacts"],
};
export const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsConfig, contactsReducer),
    filters: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
