import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "@phosphor-icons/react";
import { useFormContext } from "react-hook-form";

export const Remember = () => {
    const { register, getValues, setValue } = useFormContext();

    const value = getValues("remember");

    return (
        <Checkbox.Root
            {...register("remember")}
            defaultChecked
            onCheckedChange={() => setValue("remember", !value)}
            className="flex items-center gap-2.5 group focus:outline-none"
        >
            <div className="h-[18px] w-[18px] flex rounded-md items-center justify-center bg-50 group-data-[state=checked]:bg-primary transition-colors group-focus:ring-1 group-focus:ring-primary group-focus:ring-offset-1 group-focus:ring-offset-background">
                <Checkbox.Indicator>
                    <Check size={14} className="text-white" />
                </Checkbox.Indicator>
            </div>
            <span className="font-medium text-900 text-sm">Remember-me</span>
        </Checkbox.Root>
    );
};
