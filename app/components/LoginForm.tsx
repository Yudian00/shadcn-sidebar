"use client"

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { LoginFormSchema } from '@/lib/schema/Login'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from "zod"
import { toast } from "sonner"


function LoginForm() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const onSubmit = async () => {
        setLoading(true);
        //* async loading simulation
        setTimeout(() => {

            toast("Login Success", {
                className: "bg-green-500",
                description: "Redirect to home page",
            })
            router.replace('/home');
            setLoading(false);
        }, 2000);
    }

    const form = useForm<z.infer<typeof LoginFormSchema>>({
        resolver: zodResolver(LoginFormSchema),
        defaultValues: {
            email: "user@example.com",
            password: "user",
        },
    })

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="" {...field} />
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
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input autoComplete='' type='password' placeholder="" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button loading={loading} type="submit">Masuk</Button>
            </form>
        </Form >
    )
}



export default LoginForm