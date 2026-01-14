import Image from "next/image";
import { TypographyH3, TypographyP } from "./typography";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { LOREM_IPSUM } from "@/constants/variabel";
import Link from "next/link";

interface ArticleCardProps {
  title?: string;
  description?: string;
  image?: string;
  slug?: string;
}

export function ArticleCard({
  title,
  description,
  image,
  slug,
}: ArticleCardProps) {
  return (
    <Link href={slug ? `/articles/${slug}` : "/articles/test-article"}>
      <Card className="grid grid-cols-1 md:grid-cols-[1fr_220px] gap-6 p-6 items-stretch hover:bg-accent">
        <div className="">
          <Badge variant="secondary" className="w-fit mb-4">
            Artikel
          </Badge>

          <TypographyH3 className="line-clamp-3">
            {title || LOREM_IPSUM}
          </TypographyH3>

          <TypographyP className="mt-0 line-clamp-2">
            {description || LOREM_IPSUM}
          </TypographyP>
        </div>

        <div className="relative aspect-square w-full h-full overflow-hidden rounded-lg bg-muted">
          <Image
            src={image || "/logo.jpg"}
            alt="Artikel thumbnail"
            fill
            className="object-cover"
            sizes="220px"
          />
        </div>
      </Card>
    </Link>
  );
}
