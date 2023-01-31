import { createSlice } from '@reduxjs/toolkit';

let userName;
let userEmail;
let phoneNumber;
let postalCode;
let nationalCode;
let step;

export const userSlice = createSlice({
    name: "user",
    initialState: { userInfo: { phoneNumber, userName, userEmail, postalCode, nationalCode, step } },
    reducers: {
        addPhoneNumber: (state, action) => {
            state.userInfo.phoneNumber = action.payload;
        },
        addUserName: (state, action) => {
            state.userInfo.userName = action.payload;
        },
        addUserEmail: (state, action) => {
            state.userInfo.userEmail = action.payload;
        },
        addUserPostalCode: (state, action) => {
            state.userInfo.postalCode = action.payload;
        },
        addUserNationalCode: (state, action) => {
            state.userInfo.nationalCode = action.payload;
        },
        clearUserInfo: (state) => {
            state.userInfo = {};
        },
        addInfoToStorage: (state, action) => {
            state.userInfo = { ...action.payload };
        },
        setStep: (state, action) => {
            state.userInfo = action.payload;
        }
    }
}
)
export const { addPhoneNumber, addUserEmail, addUserName, addUserNationalCode, addUserPostalCode, clearUserInfo, addInfoToStorage, setStep } = userSlice.actions
export default userSlice.reducer;