import NextImage from "next/image";
import shape from "@/assets/shape.jpg";

export const Image = () => {
    return (
        <NextImage
            src={shape}
            alt="Image shape"
            priority
            className="hidden lg:flex max-w-[50vw] w-full h-[100vh] object-cover"
        />
    );
};
