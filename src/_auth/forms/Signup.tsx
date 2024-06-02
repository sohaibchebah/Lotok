import { useMutation } from "react-query";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { Button } from "../../../@/components/ui/button";
import axios from 'axios';
import { useQuery } from "react-query";
import Profile from "./Profile";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../@/components/ui/form";
import { Input } from "../../../@/components/ui/input";
import { Link, Navigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { StringValidation, z } from "zod";
import { useForm } from "react-hook-form";
import { SignupValidation } from "../../../@/lib/validation/index";
import { useCreateUserAccount } from "/lib/react-query/queriesAndmutations.ts";
import { useState } from "react";
const Signup = () => {
  const [err, setErr] = useState<String>("");

  //    
  // const [isLoading , setisLoading] = useState();
  const isLoading = false;
  // const mutation = useMutation(
  // async (values) => {
  //     const response = await fetch("http://127.0.0.1:8000/api/users/", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         accept: "application/json",
  //       },
  //       body: JSON.stringify(values),

  //       mode: "no-cors",
  //     });

  //   if (!response.ok) {
  //     throw new Error("Network response was not ok");
  //   }

  //   return await response.json();
  // },
  // {
  //   onSuccess: (data) => {
  //     console.log("Data created successfully:", data);
      
  //   },
  //   onError: (error) => {
  //     console.error("Error creating data:", error);
  //   },
  // }
  // );
async function createUser(userData) {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/users/",
      JSON.stringify(userData),
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    if (response.status === 201) {
      console.log("User created successfully:", response.data);
      <Navigate to='/Profile'></Navigate>;
    } else {
      console.error("Error creating user:", response.statusText);
    }
  } catch (e:any) {
    console.error(e.response?.data.email);
    setErr(e.response?.data.email);
  }
}


  
  
  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      re_password : "",
    },
  });
  // async function onSubmit(values : any) {
  //   try {
  //     const  response = await mutation.mutate(values);
       
  //     // console.log(JSON.stringify(values));

  //    } catch (error) {
  //      console.error("Signup error:", error);

  //    }
  // }
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(createUser)}
          className="flex flex-col w-full items-center h-full justify-center"
        >
          <h2 className="  font-bold text-3xl mb-[50px]">Sign Up</h2>
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="First name"
                    {...field}
                    className="w-1/2 w-[300px] mb-2 py-6"
                    autoComplete="off"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Last name"
                    {...field}
                    className="w-1/2 w-[300px] mb-2 py-6"
                    autoComplete="off"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
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
          <FormField
            control={form.control}
            name="re_password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    className="mb-2 py-6 w-[300px]"
                    placeholder="Rewrite your password"
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
            {isLoading ? <div>loading ...</div> : <div>Sign up</div>}
          </Button>
          <p className="text-small-regular text-2 text-center mt-2 mb-3">
            already have an account ?
            <Link
              to="/Login"
              className="text-primary text-small-semibold ml-1 "
            >
              log in
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

export default Signup;
