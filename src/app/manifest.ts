import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DCS 100.50 FM - Sahabat Setia Anda",
    short_name: "DCS FM",
    description:
      "Radio DCS 100.50 FM Madiun - Sahabat Setia Anda. Hiburan, Informasi, dan Inspirasi.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#DB2777", // Example primary color
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
