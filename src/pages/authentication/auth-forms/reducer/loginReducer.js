// types
import { createSlice ,createAsyncThunk} from '@reduxjs/toolkit';
import axiosInstance from 'utils/config/axiosConfig';

// initial state
const initialState = {
    data: [],
    loading: false,
    isSuccess: null,
    message: "",
};

export const CallLogin = createAsyncThunk(
    "CallLogin",
    async (object, { getState, rejectWithValue }) => {
      try {
        const  data  = await axiosInstance.post("http://localhost:9005/integrated/login",object)
          console.log("data",data);
        return data;
      } catch (error) {
        rejectWithValue(error.response);
      }
    }
  );
 
// ==============================|| SLICE - MENU ||============================== //

const loginReducer = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login(state, action) {
          state.loading = true;
        },
        loginSuccess(state, action) {
          state.loading = false;
          state.data = action.payload;
          state.isSuccess = true;
        },
        loginFailed(state, action) {
          state.loading = false;
          state.isSuccess = false;
          state.message = action.payload;
        },
        cleanMessage(state) {
          state.loading= false;
          state.isSuccess= null;
          state.message= "";
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

export default loginReducer.reducer;

export const {login,loginSuccess,loginFailed,cleanMessage  } = loginReducer.actions;
