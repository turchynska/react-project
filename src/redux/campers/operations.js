import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/";
// GET @ /campers
export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async ({ page = 1, perPage = 10, filter = "" }, thunkAPI) => {
    try {
      const res = await axios.get(
        `/campers?page=${page}&limit=${perPage}${filter ? `&${filter}` : ""}`
      );
      console.log("API response:", res.data);
      return res.data;
    } catch (error) {
      console.error("Error fetching campers:", error); // Додайте виведення помилки в консоль
      if (error.response && error.response.status === 404) {
        toast.error("Not found, try changing filter");
      } else {
        toast.error("Something went wrong");
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// GET @ /campers/:camperId
export const getCamperById = createAsyncThunk(
  "campers/getCamperInfo",
  async (camperId, thunkAPI) => {
    try {
      const res = await axios.get(`/campers/${camperId}`);
       console.log("Fetched campers:", res.data);
      return res.data;
    } catch (error) {
      toast.error("Failed to fetch camper details");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
