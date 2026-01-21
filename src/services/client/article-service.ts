export class ArticleService {
  async deleteArticleById(id: string) {
    const response = await fetch(`/api/articles/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete article");
    }

    return response;
  }
}

export const articleService = new ArticleService();
