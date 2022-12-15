// types
import { createSlice } from '@reduxjs/toolkit';
import axiosInstance from 'config/axiosConfig';
import { createAsyncThunk } from '../../../../../node_modules/@reduxjs/toolkit/dist/createAsyncThunk';

// initial state
const initialState = {
    data: [],
    loading: false,
    isSuccess: false,
    message: "",
};

// export const CallLogin = createAsyncThunk(
//     "CallLogin",
//     async (object, { getState, rejectWithValue }) => {
//       console.log(getState());
//       try {
//         const { data } = await axiosInstance.post("/integrated/login",object)
//         console.log(data);
//         return data;
//       } catch (error) {
//         rejectWithValue(error.response);
//       }
//     }
//   );

// ==============================|| SLICE - MENU ||============================== //

const menu = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login(state, action) {
            state.data = action.payload;
        }
    },
    // extraReducers: {
    //     [CallLogin.pending]: (state, action) => {
    //       state.loading = true;
    //     },
    //     [CallLogin.fulfilled]: (state, { payload }) => {
    //       state.loading = false;
    //       state.data = payload;
    //       state.isSuccess = true;
    //     },
    //     [CallLogin.rejected]: (state, { payload }) => {
    //       state.loading = false;
    //       state.isSuccess = false;
    //       state.message = "failed";
    //     },
    //   },
});

export default menu.reducer;

export const { activeItem, activeComponent, openDrawer, openComponentDrawer } = menu.actions;