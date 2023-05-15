import { Divider, Heading, Image, LoginForm, Logo, SocialButton, Wrapper } from "@/components";
import Link from "next/link";

import logoFacebook from "@/assets/logoFacebook.svg";
import logoGoogle from "@/assets/logoGoogle.svg";

export default function Home() {
    return (
        <Wrapper>
            <div className="flex flex-col lg:flex-row max-w-[100vw] lg:max-w-[50vw] w-full h-[100vh] justify-start md:justify-center items-center pt-12 md:pt-0 px-5 md:px-10 xl:px-0">
                <div className="flex flex-col max-w-[100vw] lg:max-w-[448px] w-full h-auto items-start gap-6">
                    <Logo />
                    <Heading />
                    <div className="flex w-full justify-between items-center gap-3">
                        <SocialButton text="Google" image={logoGoogle} />
                        <SocialButton text="Facebook" image={logoFacebook} />
                    </div>
                    <Divider />
                    <LoginForm />
                    <div className="flex w-full items-center justify-center gap-1 font-medium text-sm">
                        <p className="text-500">{`Don't have an account ?`}</p>
                        <Link href="/" className="text-link hover:underline hover:underline-offset-2">
                            Create an account
                        </Link>
                    </div>
                </div>
            </div>
            <Image />
        </Wrapper>
    );
}
