import { Header } from "../components/common/Header";

type MainLayoutProps = {
    children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <>
        <Header />
        <main>{children}</main>
        </>
    );
}