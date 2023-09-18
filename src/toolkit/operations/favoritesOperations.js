import { createAsyncThunk } from "@reduxjs/toolkit";

import instance from "../instance";

const getAll = createAsyncThunk("favorites/getAll", async (_, { rejectWithValue }) => {
	try {
		const { data } = await instance.get("favorite");
		return data;
	} catch (e) {
		return rejectWithValue(e.response.data.message);
	}
});

const add = createAsyncThunk("favorites/add", async (cred, { rejectWithValue }) => {
	try {
		const { data } = await instance.post("favorite", cred);
		return data;
	} catch (e) {
		return rejectWithValue(e.response.data.message);
	}
});

const remove = createAsyncThunk("favorites/remove", async (id, { rejectWithValue }) => {
	try {
		const { data } = await instance.delete(`favorite/${id}`);
		return data;
	} catch (e) {
		return rejectWithValue(e.response.data.message);
	}
});

export { getAll, add, remove };
