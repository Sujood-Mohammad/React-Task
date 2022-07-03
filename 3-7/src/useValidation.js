import React, { useEffect, useState } from "react";
const useValidation = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);

    const emailRegex =
        /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    const passwordRegex =
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    useEffect(() => {
        setEmail(email);
        setPassword(password);
        if (email.match(emailRegex)) {
            setIsEmailValid(true);
        } else {
            setIsEmailValid(false);
        }
        if (password.match(passwordRegex)) {
            setIsPasswordValid(true);
        } else {
            setIsPasswordValid(false);
        }
    }, [email, password]);

    return {
        isEmailValid,
        isPasswordValid,
        email,
        password,
        setEmail,
        setPassword,
    };
};


export default useValidation
