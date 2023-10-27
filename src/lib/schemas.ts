import * as z from "zod";

export const signinSchema = z.object({
    email: z.string().email().min(1, { message: "Field cannot be empty" }),
    password: z.string().min(8, { message: "At least 8 characters expected" }),
});

export const signupSchema = z.object({
    firstName: z.string().min(3),
    lastName: z.string().min(3),
    email: z.string().email().min(1, { message: "Field cannot be empty" }),
    password: z.string().min(8, { message: "At least 8 characters expected" }),
});
