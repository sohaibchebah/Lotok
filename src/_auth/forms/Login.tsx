import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { Button } from "../../../@/components/ui/button";
import Profile from "./Profile";
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

const Login = () => {
  async function logUser(userData: any) {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/jwt/create/",
        JSON.stringify(userData),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      // if (response.status === 201) {
      console.log("user loged successefily", response.data);
      <Navigate to="/Profile"></Navigate>;
      // }
      // else {
      //   console.error("wrong log in ", response.statusText);
      // }
    } catch (error) {
      console.log(error);
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
                {/* <FormLabel>password</FormLabel> */}
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
