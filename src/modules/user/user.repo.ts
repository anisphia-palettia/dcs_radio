import { prisma } from "@/shared/lib/prisma";

export const userRepository = {
  findMany() {
    return prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });
  },
  delete(id: string) {
    return prisma.user.delete({
      where: {
        id: id,
      },
    });
  },
};
