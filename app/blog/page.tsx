import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getBlogPosts, isContentfulConfigured } from "@/lib/contentful";
import { blogArticles } from "./blogData";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "@phosphor-icons/react/dist/ssr";

export const revalidate = 60;

export default async function BlogListing() {
  let posts: any[] = [];

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

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative py-16 bg-[var(--console-header)] border-b border-border-custom overflow-hidden font-mono">
          <div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 border border-border-custom bg-primary/5 text-blue-500 text-[10px] uppercase tracking-wider rounded-none">
                INSIGHTS & RESOURCES
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold uppercase font-sans tracking-tight">
                Logistics Intelligence Blog
              </h1>
              <p className="text-xs md:text-sm text-foreground/75 leading-relaxed font-sans normal-case">
                Industry-leading guidance on dangerous goods compliance, customs duties, and global freight corridor management.
              </p>
            </div>
          </div>
          {/* Subtle decoration grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(38,48,113,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,48,113,0.04)_1px,transparent_1px)] bg-[size:30px_30px] -z-10" />
        </section>

        {/* Blog Grid */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border-custom bg-primary/[0.01]">
              {posts.map((post, index) => {
                const indexStr = (index + 1).toString().padStart(2, "0");
                return (
                  <article 
                    key={post.slug}
                    className="group flex flex-col justify-between border-r border-b border-border-custom hover:bg-primary/[0.04] hover:border-blue-500/40 transition-all duration-200 p-6 min-h-[420px] relative overflow-hidden font-mono"
                  >
                    <div>
                      {/* Thumbnail */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="bg-primary/5 border border-border-custom text-blue-500 text-[9px] font-bold px-2 py-0.5 rounded-none uppercase tracking-wider">
                          {post.category}
                        </span>
                        <span className="text-[10px] font-bold text-foreground/45 group-hover:text-blue-500">
                          {indexStr}
                        </span>
                      </div>

                      <div className="relative aspect-[16/10] w-full bg-[var(--console-bg)] overflow-hidden rounded-none border border-border-custom mb-4">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover opacity-90 dark:opacity-85"
                        />
                      </div>

                      {/* Content */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-3 text-[10px] text-foreground/50 font-bold">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        <h2 className="text-sm font-bold text-foreground leading-snug group-hover:text-blue-500 transition-colors uppercase font-sans">
                          {post.title}
                        </h2>
                        <p className="text-[11px] text-foreground/70 leading-relaxed font-sans font-medium line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    {/* Read More button */}
                    <div className="pt-4">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-xs font-bold text-blue-500 hover:text-blue-600 gap-1 group/btn"
                      >
                        Read article
                        <ArrowRight className="h-3.5 w-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                    {/* Snappy bottom border bar */}
                    <div className="absolute left-0 bottom-0 w-full h-[1.5px] bg-[#3b82f6] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
