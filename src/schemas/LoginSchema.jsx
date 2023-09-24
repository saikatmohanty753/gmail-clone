import * as Yup from 'yup';

export const LoginSchema = Yup.object({
    "username":Yup.string().required("⚠️Please enter the username"),
    "password":Yup.string().required("⚠️Please enter the password"),
})