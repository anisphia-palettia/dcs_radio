import { FloatingRadioPlayer } from "@/app/(Home)/(HomePage)/_components/floating-radio-player";
import { FooterHomePage } from "@/app/(Home)/_components/footer-home-page";

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
