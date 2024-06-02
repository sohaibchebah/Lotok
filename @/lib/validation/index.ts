import { z } from "zod";


export const SignupValidation = z.object({
    first_name : z.string().min(2, {message : 'Too short'}),
    last_name: z.string().min(2 , {message: 'Too short'}).max(50),
    email: z.string().email(),
    password: z.string().min(8, { message: 'password should be at least 8 chars' }),
    re_password: z.string().min(8, { message: 'password should be at least 8 chars' }),
    
});

export const LoginValidation = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "password should be at least 8 chars" }),

  
});