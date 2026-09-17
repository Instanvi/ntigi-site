import { createClient } from "contentful";

const spaceId = process.env.CONTENTFUL_SPACE_ID || "";
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN || "";

export const isContentfulConfigured = spaceId !== "" && accessToken !== "";

export const contentfulClient = isContentfulConfigured
  ? createClient({
      space: spaceId,
      accessToken: accessToken,
    })
  : null;

export interface ContentfulBlogPost {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  coverImage: {
    fields: {
      file: {
        url: string;
      };
      description?: string;
    };
  };
  content: any; // Rich Text document structure
  tags: string[];
}

export async function getBlogPosts(): Promise<any[]> {
  if (!contentfulClient) {
    return [];
  }
  try {
    const response = await contentfulClient.getEntries({
      content_type: "kassongoBlogPost",
      order: ["-fields.date" as any], // Order by date descending
    });
    return response.items;
  } catch (error: any) {
    // Silently return empty array if content type doesn't exist or any other Contentful error
    console.log("Contentful blog fetch info: Content type may not exist yet, using fallback data");
    return [];
  }
}

export async function getBlogPostBySlug(slug: string): Promise<any | null> {
  if (!contentfulClient) {
    return null;
  }
  try {
    const response = await contentfulClient.getEntries({
      content_type: "kassongoBlogPost",
      "fields.slug": slug,
      limit: 1,
    });
    return response.items[0] || null;
  } catch (error: any) {
    // Silently return null if content type doesn't exist or any other Contentful error
    console.log("Contentful blog fetch info: Content type may not exist yet, using fallback data");
    return null;
  }
}
