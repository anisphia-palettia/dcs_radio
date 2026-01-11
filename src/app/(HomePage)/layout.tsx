import { FloatingRadioPlayer } from "./_components/FloatingRadioPlayer";
import { FooterHomePage } from "./_components/FooterHomePage";

export default function HomePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <FloatingRadioPlayer />
      {children}
      <FooterHomePage />
    </>
  );
}
