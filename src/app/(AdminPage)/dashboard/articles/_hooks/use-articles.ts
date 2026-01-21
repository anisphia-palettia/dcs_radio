"use client";

import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { articleService } from "@/services/client/article-service";

export function useArticles() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const deleteArticle = async (id: string) => {
    try {
      setIsLoading(true);
      await articleService.deleteArticleById(id);

      toast.success("Article deleted successfully");
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    deleteArticle,
    isLoading,
  };
}
