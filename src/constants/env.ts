import process from "node:process";

export const ENV = {
    DATABASE_URL: process.env.DATABASE_URL,

    ADMIN_EMAIL: process.env.ADMIN_EMAIL,
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
    ADMIN_NAME: process.env.ADMIN_NAME,
}