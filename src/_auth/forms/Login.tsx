import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { Button } from "../../../@/components/ui/button";
import Yprofile from "./Yprofile";
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
import { access, link } from "fs";
import BaseUrl from "./BaseUrl";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../@/components/ui/dialog";

const Login = () => {
  const [err, setErr] = useState<String>("");
  const [accessToken, setAccessToken] = useState<String>("");
  const [refreshToken, setRefreshToken] = useState<String>("");
  const [firstName, setfirstName] = useState<String>("");
  const [lastName, setlastName] = useState<String>("");
  const [success, setSuccess] = useState<String>("");
  const [id, setId] = useState<number>();
  const [img, setImg] = useState<string>("");
  const [stuff, setStuff] = useState<boolean>(false);
  const [status, setStatus] = useState<number>();
  const [baseUrl, setBaseUrl] = useState<string>("http://192.168.4.20:8000");
  // const [authStr, setauthStr] = useState<string>("");

  const handleDataChange = (url: string) => {
    // setBaseUrl(url);
  };
  async function logUser(userData: any) {
    try {
      const response = await axios.post(
        `${baseUrl}/api/jwt/create/`,
        JSON.stringify(userData),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      //  <Navigate to='/Profile'></Navigate>;

      // console.log(userData);
      setAccessToken(response?.data.access);
      setRefreshToken(response?.data.refresh);
      setStatus(response?.status);
      // console.log('accesstoken is:' + accessToken);
      // console.log(access)
      // window.location.href = '/Profile';
      setSuccess("user loged successefily");
      console.log("user loged successefily", response.data);

      // console.log(accessToken);
    } catch (e: any) {
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
  async function userInfo() {
    try {
      const response = await axios.get(`${baseUrl}/api/users/me/`, {
        headers: {
          Authorization: `Bearer  ${accessToken}`,
        },
      });
      console.log(`Bearer  ${accessToken}`);
      setfirstName(response?.data.first_name);
      setlastName(response?.data.last_name);
      setImg(response?.data.image_url);
      // setStuffI(response?.data.);
      setId(response?.data.id);
      console.log(response.data);

      // setlastName(response?.data.last_name);
      // setId(response?.data.id);
      // console.log('first : ' + firstName + ' last : ' + lastName + ' id :' + id);
    } catch (e: any) {
      console.log(e.response.data.detail);
    }
  }
  const handleSubmit = async (data: any) => {
    await logUser(data);
    //  await new Promise((resolve) => setTimeout(resolve, 10000));
    await userInfo();
  };
  // userInfo();
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
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
          <Dialog>
            <DialogTrigger asChild>
              <Button
                type="submit"
                className="shad-button_primary w-[300px] flex flex-center"
              >
                {isLoading ? <div>loading ...</div> : <div>Login</div>}
              </Button>
            </DialogTrigger>
            <DialogContent className="">
              {err && <p className="text-primary mb-3 mt-3">{err}</p>}
              {success && (
                <div className="flex flex-col justify-center items-center">
                  <p className="text-green-600 mb-3 mt-3 font-semibold">
                    {success}
                  </p>
                  <Link
                    state={{
                      firstName: firstName,
                      lastName: lastName,
                      img: img,
                    }}
                    to={"/Yprofile"}
                    className="text-black font-semibold text-small-semibold ml-1"
                  >
                    Go to Profile
                  </Link>
                </div>
              )}
            </DialogContent>
          </Dialog>

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
      <BaseUrl changeUrl={handleDataChange} />
    </>
  );
};

export default Login;
