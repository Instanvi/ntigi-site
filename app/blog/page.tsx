import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getBlogPosts, isContentfulConfigured } from "@/lib/contentful";
import { blogArticles } from "./blogData";
import BlogListingClient, { UnifiedBlogPost } from "./BlogListingClient";

export const revalidate = 60;

export default async function BlogListing() {
  let posts: UnifiedBlogPost[] = [];

  if (isContentfulConfigured) {
    const contentfulPosts = await getBlogPosts();
    if (contentfulPosts && contentfulPosts.length > 0) {
      posts = contentfulPosts.map((post: any) => {
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
          isContentful: true,
        };
      });
    }
  }

  if (posts.length === 0) {
    posts = blogArticles.map((post) => ({
      ...post,
      isContentful: false,
    }));
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <BlogListingClient posts={posts} />
      <Footer />
    </div>
  );
}
