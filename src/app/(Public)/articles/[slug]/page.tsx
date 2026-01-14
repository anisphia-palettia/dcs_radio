import { LOREM_IPSUM } from "@/constants/variabel";
import { BackNavigationRoute } from "@/app/(Public)/_components/BackNavigationRoute";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = {
    title:
      "Artikel 1 dengan judul yang cukup panjang supaya terlihat bagaimana tampilan di halaman detail",
    category: "Artikel",
    date: "12 Januari 2026",
    image: "/logo.jpg",
    content: `${LOREM_IPSUM}\n\n${LOREM_IPSUM}\n\n${LOREM_IPSUM}`,
  };
  return (
    <section className="container mx-auto px-4 md:p-8 space-y-8">
      <BackNavigationRoute to={"Artikel"} url={"/articles"} />
    </section>
  );
}
