"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit2, Trash2, Eye } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";
import { useArticles } from "../_hooks/use-articles";

import { ArticleWithRelations } from "@/services/server/article-service";

interface ArticleListProps {
  articles: ArticleWithRelations[];
}

export function ArticleList({ articles }: ArticleListProps) {
  const { deleteArticle, isLoading } = useArticles();
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {articles.map((article) => (
            <TableRow key={article.id}>
              <TableCell className="font-medium">{article.title}</TableCell>
              <TableCell>{article.category?.name || "Uncategorized"}</TableCell>
              <TableCell>{article.author.name}</TableCell>
              <TableCell>
                <Badge variant={article.isPublished ? "default" : "secondary"}>
                  {article.isPublished ? "Published" : "Draft"}
                </Badge>
              </TableCell>
              <TableCell>
                {format(new Date(article.createdAt), "PPP")}
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="icon" asChild>
                    <Link href={`/articles/${article.slug}`}>
                      <Eye className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href={`/dashboard/articles/${article.id}/edit`}>
                      <Edit2 className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-destructive"
                    onClick={() => deleteArticle(article.id)}
                    disabled={isLoading}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
          {articles.length === 0 && (
            <TableRow>
              <TableCell colSpan={6} className="text-center h-24">
                No articles found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
