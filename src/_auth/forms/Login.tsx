import React from "react";

import { Button } from "../../../@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../../@/components/ui/form";
import { Input } from "../../../@/components/ui/input";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { SignupValidation } from "../../../@/lib/validation/index";
const Login = () => {
  const isLoading = false;
  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  function onSubmit(values: z.infer<typeof SignupValidation>) {
    console.log(values);
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col w-full items-center h-full justify-center"
        >
          <h2 className="  font-bold text-3xl mb-[50px]">Login</h2>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Email</FormLabel> */}
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
              to="/Signup"
              className="text-primary text-small-semibold ml-1"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </Form>
    </>
  );
};

export default Login;
