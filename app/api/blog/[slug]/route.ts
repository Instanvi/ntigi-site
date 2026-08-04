import { NextResponse } from "next/server";
import { getBlogPostBySlug, isContentfulConfigured } from "@/lib/contentful";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  if (!isContentfulConfigured) {
    return NextResponse.json({ post: null });
  }
  const contentfulPost = await getBlogPostBySlug(slug);
  if (!contentfulPost) {
    return NextResponse.json({ post: null });
  }
  const fields = contentfulPost.fields;
  const post = {
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
  return NextResponse.json({ post });
}
