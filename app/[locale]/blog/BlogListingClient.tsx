"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { ArrowRight, Calendar, Clock, MagnifyingGlass, Funnel } from "@phosphor-icons/react";

export interface UnifiedBlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  isContentful: boolean;
}

interface BlogListingClientProps {
  posts: UnifiedBlogPost[];
}

const categories = ["all", "guides", "routes", "customs", "compliance"];

export default function BlogListingClient({ posts }: BlogListingClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter((post) => {
    const postCategory = post.category ? post.category.toLowerCase() : "";
    const matchesCategory = selectedCategory === "all" || postCategory === selectedCategory.toLowerCase();

    const titleText = post.title ? post.title.toLowerCase() : "";
    const excerptText = post.excerpt ? post.excerpt.toLowerCase() : "";
    const tagsArray = Array.isArray(post.tags) ? post.tags : [];
    const tagMatch = tagsArray.some((tag) => 
      tag.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const matchesSearch =
      searchQuery === "" ||
      titleText.includes(searchQuery.toLowerCase()) ||
      excerptText.includes(searchQuery.toLowerCase()) ||
      tagMatch;

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="flex-grow pt-16 font-mono">
      {/* Hero Section */}
      <section className="relative py-16 bg-[var(--console-header)] border-b border-border-custom overflow-hidden">
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

      {/* Search & Filter Sticky Bar */}
      <section className="sticky top-16 z-20 bg-background/90 backdrop-blur-md border-b border-border-custom py-4 px-6 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <MagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/45" />
            <input
              type="text"
              placeholder="SEARCH ARTICLES..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-[var(--console-bg)] border border-border-custom rounded-none text-foreground focus:outline-none focus:border-blue-500 text-xs uppercase tracking-wider"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto scrollbar-hide py-1">
            <Funnel className="w-3.5 h-3.5 text-foreground/45 flex-shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 border rounded-none text-[10px] uppercase font-bold tracking-widest whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#263071] border-[#263071] text-white"
                    : "bg-[var(--console-bg)] border-border-custom text-foreground hover:bg-primary/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20 border border-border-custom bg-[var(--console-bg)] text-xs text-foreground/60">
              &gt;&gt; NO ENTRIES MATCHING YOUR FILTER CRITERIA
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border-custom bg-primary/[0.01]">
              {filteredPosts.map((post, index) => {
                const indexStr = (index + 1).toString().padStart(2, "0");
                return (
                  <article 
                    key={post.slug}
                    className="group flex flex-col justify-between border-r border-b border-border-custom hover:bg-primary/[0.04] hover:border-blue-500/40 transition-all duration-200 p-6 min-h-[420px] relative overflow-hidden"
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
          )}
        </div>
      </section>
    </main>
  );
}
