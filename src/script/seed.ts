import "dotenv/config";

import * as console from "node:console";
import { ENV } from "@/constants/env";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

async function seed() {
  const { ADMIN_NAME, ADMIN_PASSWORD, ADMIN_EMAIL } = ENV;

  if (!ADMIN_EMAIL || !ADMIN_PASSWORD || !ADMIN_NAME) {
    throw new Error("Missing required environment variables");
  }

  const existing = await prisma.user.findFirst({
    where: { email: ADMIN_EMAIL },
  });

  if (existing) {
    console.log("Admin already exists");
    return;
  }

  await auth.api.createUser({
    body: {
      email: ADMIN_EMAIL,
      password: ADMIN_PASSWORD,
      name: ADMIN_NAME,
      role: "admin",
    },
  });

  console.log("Admin user created");
  console.log({
    email: ADMIN_EMAIL,
    role: "admin",
  });
}

seed()
  .catch((err) => {
    console.error("Seed failed:", err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
