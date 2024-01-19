import { z } from "zod";

const loginForm = z.object({
    email: z.string().min(1, {
        message: "Email tidak boleh kosong",
    }),
    password: z.string().min(1, {
        message: "Password tidak boleh kosong",
    }),
});

export const LoginFormSchema = loginForm;
