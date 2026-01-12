import {SectionRadioHero} from "@/app/(GuestPage)/(HomePage)/_components/SectionRadioHero";
import {SectionArticle} from "@/app/(GuestPage)/(HomePage)/_components/SectionArticle";

export default function Home() {
  return (
    <>
      <SectionRadioHero />
      <div className="container mx-auto p-4 md:p-0">
        <SectionArticle />
      </div>
    </>
  );
}
