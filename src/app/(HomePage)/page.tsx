import { RadioHero } from "./_components/RadioHero";
import { ArticleSection } from "./_components/ArticleSection";

export default function Home() {
  return (
    <>
      <RadioHero />
      <div className="container mx-auto p-4 md:p-0">
        <ArticleSection />
      </div>
    </>
  );
}
