"use client";
import Link from "next/link";
import { CircleNotch, EnvelopeSimple, Lock, Eye } from "@phosphor-icons/react";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Form } from "./Form";
import { Remember } from "./Remember";

const loginSchema = z.object({
    email: z
        .string()
        .nonempty({
            message: "The E-mail is required",
        })
        .email({
            message: "Invalid Email format",
        }),
    password: z.string().nonempty({
        message: "The password is required",
    }),
    remember: z.boolean().default(true),
});

type LoginData = z.infer<typeof loginSchema>;

export const LoginForm = () => {
    const loginForm = useForm<LoginData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            remember: true,
        },
    });

    const {
        handleSubmit,
        formState: { isSubmitting },
    } = loginForm;

    const onHandleSubmit = (data: LoginData) => {
        alert(JSON.stringify(data));
    };

    return (
        <FormProvider {...loginForm}>
            <form id="form" className="flex flex-col align-start gap-4 w-full" onSubmit={handleSubmit(onHandleSubmit)}>
                <Form.Field>
                    <Form.Label htmlFor="email">Email</Form.Label>
                    <Form.Input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        LeftIcon={EnvelopeSimple}
                        RightIcon={null}
                    />
                    <Form.ErrorMessage field="email" />
                </Form.Field>
                <Form.Field>
                    <Form.Label htmlFor="password">Password</Form.Label>
                    <Form.Input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        LeftIcon={Lock}
                        RightIcon={Eye}
                    />
                    <Form.ErrorMessage field="password" />
                </Form.Field>
                <div className="flex w-full items-center justify-between pl-1">
                    <Remember />
                    <Link href="/" className="text-sm text-link font-medium hover:underline hover:underline-offset-2">
                        Forgot password ?
                    </Link>
                </div>
            </form>
            <button
                type="submit"
                form="form"
                disabled={isSubmitting}
                className="flex w-full h-12 items-center justify-center border-0 bg-primary hover:bg-[#248eff] text-white text-sm font-semibold rounded-lg transition-all ease-in-out duration-200"
            >
                {isSubmitting ? <CircleNotch size={20} weight="bold" className="animate-spin" /> : "Log in"}
            </button>
        </FormProvider>
    );
};
