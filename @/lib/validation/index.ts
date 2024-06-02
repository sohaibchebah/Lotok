import { z } from "zod";
const phoneRegex = new RegExp(/^(00213|\+213|0)(5|6|7)([0-9]){8}$/);

export const SignupValidation = z.object({
  first_name: z.string().min(2, { message: "Too short" }),
  last_name: z.string().min(2, { message: "Too short" }).max(50),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "password should be at least 8 chars" }),
  re_password: z
    .string()
    .min(8, { message: "password should be at least 8 chars" }),
});

export const LoginValidation = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "password should be at least 8 chars" }),
});

export const postValidation = z.object({
  first_name: z.string().min(2, { message: "Too short" }),
  last_name: z.string().min(2, { message: "Too short" }).max(50),
  phone_number: z.string().regex(phoneRegex, "Invalid Number!"),
  driving_license: z.string().min(9, { message: "Should be 9 characters" }),
  expiration_date: z.string().datetime(),
  driving_license_image: z.string(),
  date_from: z.string().datetime(),
  date_to: z.string().datetime(),
  payment: z.string(),
});
export const AddPostValidation = z.object({
  PricePerDay: z.string(),
  PricePerWeek: z.string(),
  Number: z.string().regex(phoneRegex, "Invalid Number!"),
  carte_grise: z.string(),
  la_surance: z.string(),
  Scanner: z.string(),
  City: z.string(),
  date_from: z.string().datetime(),
  date_to: z.string().datetime(),
  Air_conditioner: z.string(),
});
