import "./globals.css";

export const metadata = {
    title: "Login | Delta Company",
    description: "Delta Company login page.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
