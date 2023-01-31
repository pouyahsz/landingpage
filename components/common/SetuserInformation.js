import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addInfoToStorage } from '../../store/userSlice';
import { addSelectedItemToStorage } from '../../store/basketSlice';
const SetUserInformation = ({ children }) => {

    const dispatch = useDispatch();
    useEffect(() => {
        const userStore = {};
        let basketStore;
        if (typeof window !== 'undefined') {
            userStore.userName = localStorage.getItem("name") ? localStorage.getItem("name") : undefined;
            userStore.userEmail = localStorage.getItem("email") ? localStorage.getItem("email") : undefined;
            userStore.phoneNumber = localStorage.getItem("phone-number") ? localStorage.getItem("phone-number") : undefined;
            userStore.postalCode = localStorage.getItem("postal-code") ? localStorage.getItem("postal-code") : undefined;
            userStore.nationalCode = localStorage.getItem("national-code") ? localStorage.getItem("national-code") : undefined;
        }
        if (typeof window !== 'undefined') {
            basketStore = JSON.parse(localStorage.getItem("product"));

        }
        dispatch(addInfoToStorage(userStore));
        dispatch(addSelectedItemToStorage(basketStore));
    }, [])
    return (
        <div>
            {children}
        </div>

    )
}

export default SetUserInformation;