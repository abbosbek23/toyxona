import axios from "axios";
import { IApi, IForm } from "./types";
import { BASE_URL } from "../../config";
import { ICategory } from "../../interface";

export const Register = ( body : IApi.Register.Request) => axios.post<IApi.Register.Response>(`${BASE_URL}/v1/users/register`,body);
export const Register2step = (body: IApi.Register2steps.Request) => {
    const headers = {
        'Authorization': `Bearer ${localStorage.getItem("access")}`,
        'Content-Type': 'application/json'
    };

    return axios.post<IApi.Register2steps.Response>(
        `${BASE_URL}/v1/users/register-step2`,
        body,
        { headers }
    );
};
export const ActiveCode = ( body : IApi.ActiveCodes.Request) => axios.post<IApi.ActiveCodes.Response>(`${BASE_URL}/v1/users/register-activate-code`,body);
export const Login = ( body : IApi.Login.Request) => axios.post<IApi.Login.Response>(`${BASE_URL}/user/login`,body)
export const RefreshToken = (body:any) => axios.post(`${BASE_URL}/v1/users/login-refresh`,body)
export const ResetPassword = ( body : IApi.Verification.Request) => axios.post<IApi.Verification.Response>(`${BASE_URL}/v1/users/reset-password`,body);
export const ResetPasswordConfirm = ( body : IApi.ResetPasswords.Request) => axios.post<IApi.ResetPasswords.Response>(`${BASE_URL}/v1/users/reset-password-confirm`,body);