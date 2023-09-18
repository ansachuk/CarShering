import { createSlice } from "@reduxjs/toolkit";
import { getAll } from "../operations/carsOperations";

const initialState = {
	allCars: [],
	favorites: [],
	page: 1,
	isLoading: false,
	error: null,
};

const carsSlice = createSlice({
	name: "cars",
	initialState,
	reducers: {
		increasePage(state) {
			state.page += 1;
		},
		addToFavorite(state, { payload }) {
			state.favorites.push(payload);
		},
		removeFromFavorite(state, { payload }) {
			state.favorites = state.favorites.filter(item => item.id !== payload);
		},
	},
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

export const { increasePage, addToFavorite, removeFromFavorite } = carsSlice.actions;

export default carsSlice.reducer;
