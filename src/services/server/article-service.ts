import { articleRepository } from "@/repositories/article-repository";
import { Prisma } from "../../generated/prisma/client";

export class ArticleService {
  async getArticles() {
    const options = {
      orderBy: {
        createdAt: "desc",
      },
      include: {
        author: {
          select: {
            name: true,
          },
        },
        category: {
          select: {
            name: true,
          },
        },
      },
    } satisfies Prisma.ArticleFindManyArgs;

    return articleRepository.findAll(options);
  }

  async deleteArticle(id: string) {
    return articleRepository.delete(id);
  }
}

export type ArticleWithRelations = Prisma.ArticleGetPayload<{
  include: {
    author: { select: { name: true } };
    category: { select: { name: true } };
  };
}>;

export const articleService = new ArticleService();
