import Image from "next/image";

interface SocialButtonProps {
    image: "*.svg";
    text: string;
}

export const SocialButton = ({ image, text }: SocialButtonProps) => {
    return (
        <button className="flex w-full bg-none items-center justify-center gap-[10px] h-12 border border-50 rounded-lg hover:shadow-sm">
            <Image src={image} alt={`logo ${text}`} className="w-5 h-5 md:w-6 md:h-6" />
            <span className="text-900 text-lg font-semibold">{text}</span>
        </button>
    );
};
