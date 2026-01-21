import { articleService } from "@/services/server/article-service";
import { ArticleList } from "./_components/article-list";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default async function ArticlesPage() {
  const articles = await articleService.getArticles();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Articles</h1>
          <p className="text-muted-foreground">Manage your articles properly</p>
        </div>
        <Button asChild>
          <Link href="/dashboard/articles/create">
            <Plus className="mr-2 h-4 w-4" />
            Add New
          </Link>
        </Button>
      </div>

      <ArticleList articles={articles} />
    </div>
  );
}
