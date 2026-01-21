import { auth } from "@/lib/auth";
import { articleService } from "@/services/server/article-service";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const session = await auth.api.getSession();

    // Check if user is authenticated and authorized (optional for now but good practice)
    if (!session?.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    await articleService.deleteArticle(params.id);

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("[ARTICLE_DELETE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
