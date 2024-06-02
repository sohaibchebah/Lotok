import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { Button } from "../../../@/components/ui/button";
import Yprofile from './Yprofile';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../../@/components/ui/form";
import { Input } from "../../../@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { LoginValidation } from "../../../@/lib/validation/index";
import { createContext, useState } from "react";
import { access, link } from 'fs';

const Login = () => {
  const [err, setErr] = useState<String>('');
  const [accessToken, setAccessToken] = useState<String>('');
  const [refreshToken, setRefreshToken] = useState<String>('');
  const [firstName, setfirstName] = useState<String>("");
  const [lastName, setlastName] = useState<String>("");
  const [id, setId] = useState<number>();
  const [status, setStatus] = useState<number>();






  async function logUser(userData:any) {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/jwt/create/',
        JSON.stringify(userData), {
          headers: { "Content-Type": "application/json" },
          
      });
      //  <Navigate to='/Profile'></Navigate>;
      
        // console.log(userData);
      setAccessToken(response?.data.access);
      setRefreshToken(response?.data.refresh);
      setStatus(response?.status);
      // console.log('accesstoken is:' + accessToken);
        // console.log(access)
        // window.location.href = '/Profile';
         
        
      console.log("user loged successefily", response.data);
      const authStr = 'Bearer ' + accessToken;
      async function userInfo() {
        try {
          const response = await axios.get(
            "http://127.0.0.1:8000/api/users/me/",
            { headers: { Authorization: authStr } }
          );
          
          setfirstName(response?.data.first_name);
          setlastName(response?.data.last_name);
          setId(response?.data.id);
          console.log(response.data);
          console.log(firstName, lastName, id);
          // setlastName(response?.data.last_name);
          // setId(response?.data.id);
          // console.log('first : ' + firstName + ' last : ' + lastName + ' id :' + id);
          
        } catch (e: any) {
          console.log(e.response.data.detail);
        }
      }
      userInfo();
      
      
        
      
      
      
    }
    
    catch (e:any) {
      console.log(e);
      setErr(e.response.data.detail);
    }
  }
  const isLoading = false;
  const form = useForm<z.infer<typeof LoginValidation>>({
    resolver: zodResolver(LoginValidation),
    defaultValues: {
      email: "",
      password: "",
      
    },
  });
  // function onSubmit(values: z.infer<typeof LoginValidation>) {
  //   console.log(values);
  // }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(logUser)}
          className="flex flex-col w-full items-center h-full justify-center"
        >
          <h2 className="  font-bold text-3xl mb-[50px]">Login</h2>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl className="mb-2 py-6  ">
                  <Input
                    type="email"
                    className="w-1/2  w-[300px]"
                    placeholder="Email"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    className="mb-2 py-6 w-[300px]"
                    placeholder="Password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          
          <Button
              type="submit"
              className="shad-button_primary w-[300px] flex flex-center"
            >
              {isLoading ? <div>loading ...</div> : <div>Login</div>}
          </Button>
         
          <p className="text-small-regular text-2 text-center mt-2 ">
            Don't have an account ?
            <Link
              state={"yacine"}
              to="/Signup"
              className="text-primary text-small-semibold ml-1"
            >
              Sign Up
            </Link>
          </p>
          <p className="text-primary mb-3 mt-3">{err}</p>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const decoded = jwtDecode(credentialResponse?.credential);
              console.log(decoded);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </form>
      </Form>
    </>
  );
};

export default Login;
