import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogArticles } from "../blogData";
import { getBlogPostBySlug, isContentfulConfigured } from "@/lib/contentful";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, Tag, Lightbulb, Warning } from "@phosphor-icons/react/dist/ssr";
import { notFound } from "next/navigation";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60; // Revalidate dynamic content every 60 seconds

export default async function BlogArticle({ params }: PageProps) {
  const { slug } = await params;
  
  let post = null;

  if (isContentfulConfigured) {
    const contentfulPost = await getBlogPostBySlug(slug);
    if (contentfulPost) {
      const fields = contentfulPost.fields;
      post = {
        slug: fields.slug,
        title: fields.title,
        excerpt: fields.excerpt,
        category: fields.category || "Blog",
        date: fields.date ? fields.date.split("T")[0] : "",
        readTime: fields.readTime || "5 min read",
        image: fields.coverImage?.fields?.file?.url 
          ? `https:${fields.coverImage.fields.file.url}` 
          : "/ship.jpeg",
        tags: fields.tags || [],
        content: fields.content,
        author: fields.author || "Thuram Junior",
      };
    }
  }

  // Fallback to static articles
  if (!post) {
    const staticPost = blogArticles.find((a) => a.slug === slug);
    if (staticPost) {
      post = {
        ...staticPost,
        isContentful: false,
      };
    }
  }

  if (!post) {
    notFound();
  }

  // Helper to render Contentful rich text with custom styles matching our theme
  const renderContentfulContent = (contentDoc: any) => {
    if (!contentDoc) return null;
    return documentToReactComponents(contentDoc, {
      renderNode: {
        [BLOCKS.HEADING_2]: (node, children) => (
          <h2 className="text-xl md:text-2xl font-bold text-foreground mt-8 mb-4 uppercase font-sans tracking-tight">
            {children}
          </h2>
        ),
        [BLOCKS.HEADING_3]: (node, children) => (
          <h3 className="text-base md:text-lg font-bold text-foreground mt-6 mb-3 uppercase font-sans">
            {children}
          </h3>
        ),
        [BLOCKS.PARAGRAPH]: (node, children) => (
          <p className="text-xs md:text-sm text-foreground/80 leading-relaxed mb-4 font-sans font-medium">
            {children}
          </p>
        ),
        [BLOCKS.UL_LIST]: (node, children) => (
          <ul className="list-disc pl-5 mb-4 space-y-2 text-xs md:text-sm text-foreground/80 font-sans">
            {children}
          </ul>
        ),
        [BLOCKS.OL_LIST]: (node, children) => (
          <ol className="list-decimal pl-5 mb-4 space-y-2 text-xs md:text-sm text-foreground/80 font-mono">
            {children}
          </ol>
        ),
        [BLOCKS.LIST_ITEM]: (node, children) => (
          <li className="leading-relaxed">
            {children}
          </li>
        ),
        [BLOCKS.QUOTE]: (node, children) => (
          <div className="p-4 bg-primary/5 border-l-4 border-blue-500 text-foreground/90 rounded-r-[4px] text-xs font-mono my-4 flex gap-2">
            <Lightbulb className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
            <div>{children}</div>
          </div>
        ),
      },
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />

      <main className="flex-grow pt-20">
        <article className="py-12 font-mono">
          <div className="mx-auto max-w-3xl px-6 md:px-8 space-y-6">
            {/* Back link */}
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-1.5 text-xs font-bold text-foreground/60 hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to blog list
            </Link>

            {/* Category badge */}
            <div>
              <span className="bg-primary/5 border border-border-custom text-blue-500 text-[10px] font-bold px-2.5 py-0.5 rounded-[4px] uppercase tracking-wider">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-4xl font-extrabold text-foreground leading-tight uppercase font-sans tracking-tight">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-[10px] text-foreground/50 font-bold border-b border-border-custom pb-4">
              <div className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                <span>{post.readTime}</span>
              </div>
              <div className="pl-2 border-l border-border-custom/50">
                <span>BY {post.author.toUpperCase()}</span>
              </div>
            </div>

            {/* Thumbnail */}
            <div className="relative aspect-[21/9] w-full rounded-md overflow-hidden bg-[var(--console-bg)] border border-border-custom shadow-glow">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover opacity-95 dark:opacity-90"
              />
            </div>

            {/* Content Rendering */}
            <div className="space-y-4 pt-4 font-sans font-medium text-xs md:text-sm text-foreground/80 leading-relaxed">
              {/* Check if content is Contentful Rich Text or Static blocks array */}
              {post.content && typeof post.content === "object" && !Array.isArray(post.content) ? (
                renderContentfulContent(post.content)
              ) : Array.isArray(post.content) ? (
                post.content.map((block: any, index: number) => {
                  switch (block.type) {
                    case "p":
                      return <p key={index} className="text-xs md:text-sm">{block.text}</p>;
                    case "h2":
                      return (
                        <h2 key={index} className="text-lg md:text-xl font-bold text-foreground mt-8 mb-4 uppercase font-sans tracking-tight">
                          {block.text}
                        </h2>
                      );
                    case "h3":
                      return (
                        <h3 key={index} className="text-sm md:text-base font-bold text-foreground mt-6 mb-3 uppercase font-sans">
                          {block.text}
                        </h3>
                      );
                    case "ol":
                    case "ul":
                      return (
                        <ul key={index} className="list-disc pl-5 mb-4 space-y-2 text-xs md:text-sm text-foreground/80 font-sans">
                          {block.items?.map((item: string, idx: number) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      );
                    case "warning":
                      return (
                        <div key={index} className="p-4 bg-red-500/5 border-l-4 border-red-500 text-foreground/90 rounded-r-[4px] text-xs font-mono my-4 flex gap-2">
                          <Warning className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                          <div>{block.text}</div>
                        </div>
                      );
                    case "tip":
                      return (
                        <div key={index} className="p-4 bg-green-500/5 border-l-4 border-green-500 text-foreground/90 rounded-r-[4px] text-xs font-mono my-4 flex gap-2">
                          <Lightbulb className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <div>{block.text}</div>
                        </div>
                      );
                    default:
                      return null;
                  }
                })
              ) : null}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-6 border-t border-border-custom font-mono">
              {(Array.isArray(post.tags) 
                ? post.tags 
                : (typeof post.tags === "string" ? [post.tags] : []))
                .flatMap((tag: string) => tag.split(",").map((t: string) => t.trim()))
                .filter(Boolean)
                .map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1 bg-primary/5 text-foreground/70 text-[9px] font-bold px-2 py-0.5 rounded-[4px] border border-border-custom">
                    <Tag className="h-3 w-3 text-blue-500" />
                    {tag.toUpperCase()}
                  </span>
                ))
              }
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
