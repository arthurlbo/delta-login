import { useFormContext } from "react-hook-form";
import { getFieldError } from "@/utils/getFieldError";

interface ErrorMessageProps {
    field: string;
}

export function ErrorMessage({ field }: ErrorMessageProps) {
    const {
        formState: { errors },
    } = useFormContext();

    const fieldError = getFieldError(errors, field);

    if (!fieldError) {
        return null;
    }

    return <span className="text-xs text-red-500 mt-1">{fieldError.message?.toString()}</span>;
}
