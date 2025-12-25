import { authClient } from "@/lib/auth-client";
import { prisma } from "@/lib/prisma";

async function seed() {
  const email = "superadmin@mail.com";
  const password = "superadmin";
  const data = await authClient.signUp.email({
    email,
    password,
    name: "Super Admin",
  });

  if (data.data) {
    const superAdmin = await prisma.user.update({
      where: {
        email,
      },
      data: {
        role: "SUPER_ADMIN",
      },
    });
    console.log("Super Admin created", superAdmin);
  } else if (data.error.code === "USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL") {
    const superAdmin = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (superAdmin) {
      await prisma.user.update({
        where: {
          email,
        },
        data: {
          role: "SUPER_ADMIN",
        },
      });
    }
    console.log("Super Admin updated", superAdmin);
  } else {
    console.log("Super Admin not created", data);
  }
}

seed();
