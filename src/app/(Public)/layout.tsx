import {FloatingRadioPlayer} from "@/app/(Public)/(HomePage)/_components/FloatingRadioPlayer";
import {FooterHomePage} from "@/app/(Public)/_components/FooterHomePage";

export default function HomePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <FloatingRadioPlayer />
      <main className={"min-h-screen"}>{children}</main>
      <FooterHomePage />
    </>
  );
}
