export const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="relative flex flex-col lg:flex-row min-h-screen max-w-full w-full items-center jusitfy-center lg:justify-between bg-white">
            {children}
        </main>
    );
};
