import NextImage from "next/image";
import logo from "@/assets/logo.svg";

export const Logo = () => {
    return <NextImage src={logo} alt="logo" className="w-[120px] h-10 md:w-[136px]" priority />;
};
