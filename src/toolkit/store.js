import { configureStore } from "@reduxjs/toolkit";

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";

import carsReducer from "./slices/carsSlice";
import favoritesReducer from "./slices/favoritesSlice";

const persistfavoritesConfig = {
	key: "favorites",
	storage,
};

const persistedFavoritesReducer = persistReducer(persistfavoritesConfig, favoritesReducer);

const store = configureStore({
	reducer: {
		cars: carsReducer,
		favorites: persistedFavoritesReducer,
	},

	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);

export default store;
