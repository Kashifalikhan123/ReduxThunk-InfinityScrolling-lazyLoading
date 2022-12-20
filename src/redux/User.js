import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
 import Searching from "../utils/Searching";
import { toast } from "react-toastify";
export const search = createAsyncThunk(
  "search/create",
  async (data) => {
    const res = await Searching(data);
    debugger
    return res;
  }
);
const initState = { data: [] };
export const employeeSlice = createSlice({
  name: "employee",
  initialState: { value: initState },
  extraReducers: {
    [search.fulfilled]: (state, action) => {
        if(action.payload.articles!==undefined){
            state.value.data.splice(0,1,action.payload.articles);
            toast.warning(action.payload.status);
            debugger
        }
       
    },
    [search.rejected]: (state, action) => {
        toast.error(action.payload.status);
      },
  },
});
export const { reducer } = employeeSlice.actions;
export default employeeSlice.reducer;
