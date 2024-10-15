import { createSlice } from "@reduxjs/toolkit";

export interface IProductsState {
  NewUser: {
    FullName: string;
    Phone: string;
    Email: string;
    Password: string;
    age: number;
    Nid: number;
    Address: string;
    Gender: string;
    Annual_Expenses: boolean;
  };
  exsitEmail: boolean;
  DefaultUserEmail: string;
  DefaultUserPassword: string;
  isloggin: boolean;
}
const initialState: IProductsState = {
  NewUser: {
    FullName: "عبدالله صبري بلتاجي رخا",
    Phone: "01091415560",
    Email: "Ahmeddel400@gmail.com",
    Password: "87654321@",
    age: 17,
    Nid: 30002011232156,
    Address: "طنطا , قطور , العتوه البحريه",
    Gender: "ذكر",
    Annual_Expenses: false,
  },
  DefaultUserEmail: "abdallhsabry194@gmail.com",
  DefaultUserPassword: "12345678",
  exsitEmail: false,
  isloggin: true,
};
const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    ValidateEmailAddress: (state, action) => {
      if (state.NewUser.Email == action.payload) {
        state.exsitEmail = true;
      } else {
        state.exsitEmail = false;
      }
    },
    AddNewUser: (state, action) => {
      if (state.exsitEmail == false) {
        state.NewUser = action.payload;
      }
    },
    ToggleLoginState: (state) => {
      state.isloggin = !state.isloggin;
    },
    ActiveAnnual_Expenses: (state) => {
      state.NewUser.Annual_Expenses = true;
    },
  },
});

export const {
  AddNewUser,
  ValidateEmailAddress,
  ToggleLoginState,
  ActiveAnnual_Expenses,
} = loginSlice.actions;

export default loginSlice.reducer;
