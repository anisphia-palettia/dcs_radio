import { ArticleCard } from "@/components/ArticleCard";
import { TypographyH2 } from "@/components/typography";
import Link from "next/link";

export function ArticleSection() {
  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between">
        <TypographyH2>Artikel Terbaru</TypographyH2>
        <Link
          href="/articles"
          className="text-sm font-medium text-primary hover:underline"
        >
          Lihat semua →
        </Link>
      </div>

      <div className="flex flex-col gap-4">
        <ArticleCard title="Preorder Monitor RADIO FM" />
        <ArticleCard title="DCS Hardir" />
      </div>
    </section>
  );
}
