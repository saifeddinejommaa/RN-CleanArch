import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../../app/store";
import { useEffect, useState } from "react";
import Toast from "react-native-toast-message";
import { login } from "../AuthSlice";

export const useLogin = () => {
    const dispatch = useDispatch<AppDispatch>();
    const AuthState = useSelector((state: any) => state.auth);
    const [email,setEmail] = useState<string>("");
    const [password,setPassword] = useState<string>("");

    useEffect(() => {
        if(AuthState.error){
            Toast.show({
                type: 'error',
                text1: 'Authentication Error',
              });
        }
    }, [AuthState.error]);

    const loginUser = () => {
        dispatch(login({
            email,
            password

        }));

    };
    return {
        email,
        password,
        setEmail,
        setPassword,
        loginUser,
        isLoading:AuthState.isLoading
    };
}