import { createSlice } from "@reduxjs/toolkit";

export interface IUser {
  mail: string;
  phone_number: string;
  user_id: number;
  name: string;
  reg_date: string;
  city: string;
}

export interface IUserStateProps {
  user: null | IUser; 
}

export const initialState: IUserStateProps = {
  user: null,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    changeUser(state, action) {
      state.user = action.payload;
    },
  },
});

export default userSlice.reducer; 
export const { changeUser } = userSlice.actions; 