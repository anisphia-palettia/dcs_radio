import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CalendarDays, Clock } from "lucide-react";
import Image from "next/image";
import { BackNavigationRoute } from "../../_components/back-navigation-route";
import { Metadata } from "next";

// Mock Data Structure
interface Article {
  slug: string;
  title: string;
  description: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  category: string;
  image: string;
}

// Mock Data
const MOCK_ARTICLE: Article = {
  slug: "test-article",
  title: "Masa Depan Radio Digital di Era Streaming",
  description:
    "Bagaimana radio tradisional beradaptasi dengan perubahan kebiasaan pendengar di era digital dan streaming musik.",
  content: `
    <p>Radio telah menjadi bagian tak terpisahkan dari kehidupan kita selama lebih dari satu abad. Namun, dengan munculnya layanan streaming musik dan podcast, banyak yang mempertanyakan masa depan radio tradisional.</p>
    
    <h2>Evolusi, Bukan Revolusi</h2>
    <p>Kunci bertahan hidup radio bukanlah melawan arus teknologi, melainkan beradaptasi dengannya. Radio digital menawarkan kualitas suara yang lebih baik dan interaktivitas yang lebih tinggi.</p>
    
    <p>Stasiun radio modern kini tidak hanya menyiarkan suara, tetapi juga konten visual melalui media sosial dan platform video, menciptakan pengalaman multi-platform bagi pendengarnya.</p>
    
    <h2>Sentuhan Manusia</h2>
    <p>Salah satu keunggulan radio yang sulit ditiru oleh algoritma streaming adalah sentuhan manusia. Penyiar radio membangun hubungan emosional dengan pendengar, menemani hari-hari mereka dengan celoteh hangat dan informasi terkini.</p>
    
    <p>Di masa depan, kombinasi antara kurasi manusia dan kecanggihan teknologi akan menjadi kunci keberhasilan industri radio.</p>
  `,
  author: {
    name: "Admin DCS FM",
    avatar: "/logo.jpg", // Assuming logo is available based on ArticleCard usage
  },
  publishedAt: "15 Januari 2026",
  readTime: "5 menit baca",
  category: "Teknologi",
  image: "/logo.jpg", // Placeholder image or use local if available
};

// Mock Fetch Function
async function getArticleBySlug(slug: string): Promise<Article | null> {
  // In a real app, this would fetch from an API or DB
  // For now, return the mock article regardless of slug for demonstration,
  // or return null if strictly matching needed.
  console.log(`Fetching article for slug: ${slug}`);
  // Let's return the mock article to ensure UI is visible.
  return MOCK_ARTICLE;
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  // In real app use slug to fetch
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Artikel Tidak Ditemukan",
    };
  }

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      images: [article.image],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [article.image],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return <div>Artikel tidak ditemukan</div>;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    image: [article.image],
    datePublished: new Date().toISOString(), // Mock date for now
    dateModified: new Date().toISOString(),
    author: [
      {
        "@type": "Person",
        name: article.author.name,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-muted/40 py-8 px-4 md:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto max-w-4xl space-y-6">
        <BackNavigationRoute to={"Artikel"} url={"/articles"} />

        <Card className="overflow-hidden border-none shadow-lg">
          {/* Cover Image as Jumbotron equivalent inside Card */}
          <div className="relative w-full aspect-video md:aspect-21/9 bg-muted">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <CardHeader className="space-y-4 md:p-8">
            <div className="flex items-center justify-between">
              <Badge variant="secondary" className="text-sm font-medium">
                {article.category}
              </Badge>
              {/* Optional: Add share buttons or other actions here */}
            </div>

            <CardTitle className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
              {article.title}
            </CardTitle>

            <CardDescription className="text-lg md:text-xl text-muted-foreground">
              {article.description}
            </CardDescription>

            <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8 rounded-full overflow-hidden bg-muted border">
                  <Image
                    src={article.author.avatar}
                    alt={article.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="font-medium text-foreground">
                  {article.author.name}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <CalendarDays className="w-4 h-4" />
                <span>{article.publishedAt}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </CardHeader>

          <Separator />

          <CardContent className="p-6 md:p-8">
            <div
              className="prose prose-lg dark:prose-invert max-w-none 
              prose-headings:font-bold prose-headings:tracking-tight
              prose-p:leading-7 prose-p:text-muted-foreground
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-img:rounded-xl prose-img:shadow-lg
              [&_p]:mb-6 [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:mt-8 [&_h3]:mb-4"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </CardContent>

          <Separator />

          <CardFooter className="p-6 md:p-8 bg-muted/20">
            <div className="flex flex-col gap-2 w-full">
              <p className="text-sm text-muted-foreground">
                Terima kasih telah membaca. Kunjungi halaman artikel kami untuk
                berita menarik lainnya.
              </p>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
