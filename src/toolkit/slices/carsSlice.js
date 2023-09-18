import { createSlice } from "@reduxjs/toolkit";
import { getAll } from "../operations/carsOperations";

const initialState = {
	allCars: [],
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

export const { increasePage } = carsSlice.actions;

export default carsSlice.reducer;
