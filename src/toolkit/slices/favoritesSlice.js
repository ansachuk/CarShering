import { createSlice } from "@reduxjs/toolkit";
import { getAll } from "../operations/favoritesOperations";

const initialState = {
	allFavorites: [],
	isLoading: false,
	error: null,
};

const favorites = createSlice({
	name: "favorites",
	initialState,

	extraReducers: builder => {
		builder
			.addCase(getAll.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(getAll.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;

				state.allCars = payload;
			})
			.addCase(getAll.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
			});
	},
});

export default favorites.reducer;
