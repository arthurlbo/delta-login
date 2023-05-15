import { LabelHTMLAttributes } from "react";

export function Label(props: LabelHTMLAttributes<HTMLLabelElement>) {
    return <label className="text-base text-900 font-medium" {...props} />;
}
