import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const dataUrl = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers",
});