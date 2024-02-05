import * as yup from "yup";
export const userSchema = yup.object().shape({
    fname:yup.string().min(3).max(15).required("Please enter your name"),
    lname:yup.string().min(3).max(15).required("Please enter your Last name"),
    email:yup.string().email().required("Please enter your email"),
    password:yup.string().min(4).max(10).required("Please enter your password"),
    confirm_password:yup.string().min(4).max(10).required().oneOf([yup.ref('password'),null],"Password must match")
})