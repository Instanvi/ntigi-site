import { NextResponse } from "next/server";
import { getBlogPosts, isContentfulConfigured } from "@/lib/contentful";

export async function GET() {
  if (!isContentfulConfigured) {
    return NextResponse.json({ posts: [] });
  }
  const contentfulPosts = await getBlogPosts();
  const posts = contentfulPosts.map((post: any) => {
    const fields = post.fields;
    return {
      slug: fields.slug,
      title: fields.title,
      excerpt: fields.excerpt,
      category: fields.category,
      date: fields.date ? fields.date.split("T")[0] : "",
      readTime: fields.readTime,
      image: fields.coverImage?.fields?.file?.url 
        ? `https:${fields.coverImage.fields.file.url}` 
        : "/ship.jpeg",
      tags: fields.tags || [],
      content: fields.content,
      author: fields.author || "Thuram Junior",
    };
  });
  return NextResponse.json({ posts });
}
