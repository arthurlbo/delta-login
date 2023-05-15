import { InputHTMLAttributes, useState } from "react";
import { Icon } from "@phosphor-icons/react";

import { useFormContext } from "react-hook-form";

import { getFieldError } from "@/utils/getFieldError";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    LeftIcon: Icon;
    RightIcon: Icon | null;
}

export function Input({ name, type, LeftIcon, RightIcon, ...props }: InputProps) {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    const [showPassword, setShowPassword] = useState(false);

    const fieldError = getFieldError(errors, name);

    return (
        <div className="relative">
            <LeftIcon
                size={20}
                weight="thin"
                className={`${fieldError ? "text-red-500" : "text-500"} absolute top-3.5 left-4`}
            />
            <input
                id={name}
                type={name === "password" ? (showPassword ? "text" : type) : type}
                className={`
                h-12
                w-full
                pl-11
                rounded-lg
                border
                ${fieldError ? "border-red-500" : "border-50"}
                placeholder:text-500
                text-black
                peer
                hover:shadow-sm
                focus:outline-none
                focus:border-primary
                focus:shadow-sm"`}
                {...register(name)}
                {...props}
            />
            {RightIcon && (
                <RightIcon
                    size={20}
                    weight="thin"
                    className="text-500 absolute top-3.5 right-4 peer-focus:text-primary cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                />
            )}
        </div>
    );
}
