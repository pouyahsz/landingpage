import { createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
    name: "user",
    initialState: { userInfo: {} },
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
        }
    }
}
)
export const { addPhoneNumber, addUserEmail, addUserName, addUserNationalCode, addUserPostalCode, clearUserInfo } = userSlice.actions
export default userSlice.reducer;