"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { ArrowRight, Calendar, Clock, Article } from "@phosphor-icons/react";
import { blogArticles, BlogPost } from "@/app/blog/blogData";

// Skeleton Loader Component for Homepage Blog
function BlogCardSkeleton({ index }: { index: number }) {
  const indexStr = (index + 1).toString().padStart(2, "0");
  return (
    <div className="group flex flex-col justify-between border-r border-b border-border-custom p-6 min-h-[420px] relative overflow-hidden bg-[var(--console-bg)] animate-pulse">
      <div>
        {/* Category + index skeleton */}
        <div className="flex items-center justify-between mb-4">
          <div className="h-5 w-20 bg-primary/10 rounded-none" />
          <span className="font-mono text-[10px] font-bold text-foreground/45">{indexStr}</span>
        </div>

        {/* Thumbnail skeleton */}
        <div className="relative aspect-[16/10] w-full bg-primary/5 rounded-none border border-border-custom mb-4" />

        {/* Content skeleton */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="h-3 w-16 bg-primary/10 rounded-none" />
            <div className="h-3 w-16 bg-primary/10 rounded-none" />
          </div>
          <div className="h-4 w-4/5 bg-primary/10 rounded-none" />
          <div className="h-4 w-3/5 bg-primary/10 rounded-none" />
          <div className="space-y-1.5 pt-1">
            <div className="h-3 w-full bg-primary/5 rounded-none" />
            <div className="h-3 w-3/4 bg-primary/5 rounded-none" />
          </div>
        </div>
      </div>

      {/* Read More skeleton */}
      <div className="pt-4">
        <div className="h-3 w-24 bg-blue-500/20 rounded-none" />
      </div>
    </div>
  );
}

// Empty State Component for Homepage Blog
function EmptyBlogState() {
  const t = useTranslations("Blog");
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 border border-border-custom bg-[var(--console-bg)]">
      <div className="flex flex-col items-center max-w-md text-center space-y-4">
        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
          <Article className="w-7 h-7 text-blue-500" />
        </div>
        
        <div className="space-y-2">
          <h3 className="text-sm font-bold text-foreground uppercase font-sans tracking-tight">
            {t("emptyState.noPosts")}
          </h3>
          <p className="text-xs text-foreground/60 font-sans leading-relaxed">
            {t("emptyState.checkBackLater")}
          </p>
        </div>

        <Link
          href="/blog"
          className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 border border-border-custom text-foreground/80 hover:border-foreground hover:text-foreground rounded-none text-xs font-bold uppercase tracking-wider transition-all"
        >
          {t("exploreBlog")}
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}

export default function BlogSection() {
  const t = useTranslations("Blog");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [sectionActive, setSectionActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById("blog-section");
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        setSectionActive(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    async function loadPosts() {
      try {
        const res = await fetch("/api/blog");
        if (res.ok) {
          const data = await res.json();
          if (data.posts && data.posts.length > 0) {
            setPosts(data.posts.slice(0, 3));
            setLoading(false);
            return;
          }
        }
      } catch (err) {
        console.error("Failed to load blog posts for home section:", err);
      }
      setPosts(blogArticles.slice(0, 3));
      setLoading(false);
    }
    loadPosts();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="blog-section"
      className={`w-full py-20 bg-background border-t border-border-custom transition-all duration-700 transform translate-y-4 opacity-0 ${
        sectionActive ? "translate-y-0 opacity-100" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-2xl md:text-3.5xl font-extrabold text-foreground leading-tight uppercase font-sans">
              {t("title1")}
              <br />
              <span className="text-[#3b82f6]">{t("title2")}</span>
            </h2>
            <p className="text-xs text-foreground/70 font-sans leading-relaxed">
              {t("desc")}
            </p>
          </div>
          <div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 px-4 py-2 border border-border-custom text-foreground/80 hover:border-foreground hover:text-foreground rounded-none text-xs font-bold uppercase tracking-wider transition-all"
            >
              {t("seeAll")}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Blog Post Cards Grid */}
        {loading ? (
          // Loading State with Skeleton Loaders
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border-custom bg-primary/[0.01]">
            {Array.from({ length: 3 }).map((_, index) => (
              <BlogCardSkeleton key={index} index={index} />
            ))}
          </div>
        ) : posts.length === 0 ? (
          // Empty State
          <EmptyBlogState />
        ) : (
          // Blog Posts Grid
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border-custom bg-primary/[0.01]">
            {posts.map((post, index) => {
              const indexStr = (index + 1).toString().padStart(2, "0");
              return (
                <article
                  key={post.slug}
                  className="group flex flex-col justify-between border-r border-b border-border-custom hover:bg-primary/[0.04] hover:border-blue-500/40 transition-all duration-200 p-6 min-h-[420px] relative overflow-hidden"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-primary/5 border border-border-custom text-[#3b82f6] text-[9px] font-bold px-2 py-0.5 rounded-none uppercase tracking-wider">
                        {post.category}
                      </span>
                      <span className="font-mono text-[10px] font-bold text-foreground/45 group-hover:text-blue-500">
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

                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-[10px] text-foreground/50 font-bold font-mono">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-sm font-bold text-foreground group-hover:text-blue-500 transition-colors leading-snug uppercase font-sans">
                        {post.title}
                      </h3>
                      <p className="text-[11px] text-foreground/70 leading-relaxed font-sans font-medium line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-xs font-bold text-blue-500 hover:text-blue-600 gap-1 group/btn"
                    >
                      {t("readArticle")}
                      <ArrowRight className="h-3.5 w-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  <div className="absolute left-0 bottom-0 w-full h-[1.5px] bg-[#3b82f6] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
