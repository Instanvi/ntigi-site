export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  tags: string[];
  content: { type: "p" | "h2" | "h3" | "ul" | "ol" | "warning" | "tip"; text: string; items?: string[] }[];
}

export const blogArticles: BlogPost[] = [
  {
    slug: "shipping-electronics-lithium-batteries",
    title: "How to Ship Electronics with Lithium Batteries Internationally",
    excerpt: "Complete guide to shipping smartphones, laptops, and battery-powered devices across borders safely under global trade safety frameworks.",
    category: "Guides",
    date: "2026-07-10",
    readTime: "8 min read",
    author: "Thuram Junior",
    image: "/ship.jpeg",
    tags: ["Electronics", "Lithium Batteries", "Compliance"],
    content: [
      { type: "p", text: "Shipping electronics internationally is one of the most common requests we handle and also one of the most regulated. Between regulations on lithium batteries and carrier-specific rules, there's a lot to get right. This guide covers everything you need to know to ship electronics safely, legally, and cost-effectively." },
      { type: "h2", text: "Understanding Lithium Battery Regulations" },
      { type: "p", text: "Lithium batteries power everything from smartphones to laptops. But they're also classified as dangerous goods because they pose fire risks if damaged or short-circuited. This classification affects how you pack, label, and declare your shipment." },
      { type: "warning", text: "Loose lithium batteries (not installed in devices) are prohibited on passenger aircraft. Always declare electronics accurately undeclared batteries can result in package seizure or customs penalties." },
      { type: "h3", text: "Step-by-Step Packing Guide" },
      { type: "ol", text: "", items: [
        "Power off all devices completely. Do not ship electronics in sleep mode.",
        "Wrap each device individually in anti-static bubble wrap, minimum 2 inches thick.",
        "Place devices in original retail packaging if available, or use a sturdy corrugated box with cushioning on all sides.",
        "Label the outer box with 'LITHIUM BATTERIES HANDLE WITH CARE' if shipping devices with non-removable batteries."
      ]},
    ]
  },
  {
    slug: "china-to-cameroon-complete-guide",
    title: "Shipping from China to Cameroon: The Complete Route Guide",
    excerpt: "Learn the primary trade corridors, sea routes, customs documentation, and consolidation techniques between China and West Africa.",
    category: "Routes",
    date: "2026-07-08",
    readTime: "12 min read",
    author: "Thuram Junior",
    image: "/shipment.jpg",
    tags: ["China Trade", "Cameroon", "Logistics Corridors"],
    content: [
      { type: "p", text: "Establishing a streamlined trade lane between China and Cameroon is vital for many importers in West Africa. This guide provides a detailed route summary, comparison of shipping modes, and customs entry steps." },
      { type: "h2", text: "Shipping Methods: Ocean vs. Air Cargo" },
      { type: "p", text: "For ocean freight, cargo typically departs from main Chinese ports like Shanghai, Ningbo, or Guangzhou and arrives at the Port of Douala or Kribi. Air cargo is routed through major airport hubs for faster delivery times." },
      { type: "tip", text: "Consolidating your goods (LCL) in Chinese hubs before dispatching is the most efficient way to reduce overall import freight costs." }
    ]
  },
  {
    slug: "aes-documentation-high-value",
    title: "Understanding AES Documentation for High-Value Shipments",
    excerpt: "A guide on Automated Export System (AES) filing protocols, values thresholds, and compliance checks for global shippers.",
    category: "Customs",
    date: "2026-07-05",
    readTime: "6 min read",
    author: "Thuram Junior",
    image: "/ship.jpeg",
    tags: ["AES Filing", "Customs Compliance", "Export Controls"],
    content: [
      { type: "p", text: "The Automated Export System (AES) is the system used by U.S. exporters to electronically declare international shipments. It is used to compile trade statistics and enforce export controls." },
      { type: "h2", text: "When is an AES Filing Mandatory?" },
      { type: "p", text: "Generally, an AES filing is required for shipments of a single commodity classified under a single Schedule B number valued at over $2,500, or when an export license is required." }
    ]
  }
];
