import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://www.shreejeeindustries.in";

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/why-choose-us`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/products`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/quote`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/industries`,
            lastModified: new Date(),
        },
    ];
}