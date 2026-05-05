import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Emerson Silva — Tech Lead & Software Engineer",
    short_name: "emersonjds",
    description:
      "Tech Lead at Porto Seguro. Banking, fraud, mobile and corporate platforms.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0b0d",
    theme_color: "#0a0b0d",
    orientation: "portrait-primary",
    categories: ["portfolio", "developer", "engineering"],
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
    ],
  };
}
