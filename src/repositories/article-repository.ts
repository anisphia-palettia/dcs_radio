import { prisma } from "@/lib/prisma";
import { Prisma } from "../generated/prisma/client";

export class ArticleRepository {
  async findAll<T extends Prisma.ArticleFindManyArgs>(
    options?: T,
  ): Promise<Prisma.ArticleGetPayload<T>[]> {
    return prisma.article.findMany(
      options,
    ) as unknown as Prisma.ArticleGetPayload<T>[];
  }

  async findById(id: string) {
    return prisma.article.findUnique({
      where: { id },
    });
  }

  async create(data: Prisma.ArticleCreateInput) {
    return prisma.article.create({
      data,
    });
  }

  async update(id: string, data: Prisma.ArticleUpdateInput) {
    return prisma.article.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return prisma.article.delete({
      where: { id },
    });
  }
}

export const articleRepository = new ArticleRepository();
