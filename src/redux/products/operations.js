import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";



export const fetchCampers = createAsyncThunk(
  'campers/fetchAll',
  async ({ page, perPage, filter }, thunkAPI) => {
    try {
      const res = await axios.get(
        `/campers?page=${page}&limit=${perPage}&${filter}`
      );
      return res.data;
    } catch (err) {
            err.status === 404 && toast.error("Not found, try again")
            return thunkAPI.rejectWithValue(err.message)
    }
  }
);


export const getCamperById = createAsyncThunk(
    'campers/getCamperById',
    async (getCamperById, thunkAPI) => {
        try {
            const res = await axios.get(`/campers/${camperId}`);
            return res.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message)
        }
    }
);