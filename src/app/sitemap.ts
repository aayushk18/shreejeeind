import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://www.shreejeeindustries.in";

    return [
        { url: baseUrl },
        { url: `${baseUrl}/about` },
        { url: `${baseUrl}/contact` },
        { url: `${baseUrl}/why-choose-us` },
        { url: `${baseUrl}/products` },
        { url: `${baseUrl}/quote` },
        { url: `${baseUrl}/industries` },
    ];
}