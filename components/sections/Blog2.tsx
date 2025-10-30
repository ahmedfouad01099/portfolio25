import Link from "next/link";

interface BlogPost {
  id: number;
  image: string;
  category: string;
  categoryLink: string;
  postLink: string;
  date: string;
  title: string;
  description: string;
  readTime?: string;
  author?: string;
  tags?: string[];
}

interface BlogSectionProps {
  posts?: BlogPost[];
  title?: string;
  subtitle?: string;
  maxPosts?: number;
  showCategoryFilter?: boolean;
  className?: string;
}

const defaultBlogPosts: BlogPost[] = [
  {
    id: 1,
    image: "assets/imgs/home-page-2/blog/img-1.png",
    category: "CEO",
    categoryLink: "/category/ceo",
    postLink: "/blog/optimize-web-application-speed",
    date: "March 28, 2023",
    readTime: "3 min read",
    title: "Optimize Your Web Application for Speed",
    description:
      "Stay ahead of the curve with these emerging trends in UI/UX design.",
    author: "John Doe",
    tags: ["Performance", "Web Development", "Optimization"],
  },
  {
    id: 2,
    image: "assets/imgs/home-page-2/blog/img-2.png",
    category: "Development",
    categoryLink: "/category/development",
    postLink: "/blog/secure-web-development-best-practices",
    date: "March 28, 2023",
    readTime: "3 min read",
    title: "Best Practices for Secure Web Development",
    description:
      "Learn the essential security practices for modern web applications.",
    author: "Jane Smith",
    tags: ["Security", "Web Development", "Best Practices"],
  },
  {
    id: 3,
    image: "assets/imgs/home-page-2/blog/img-3.png",
    category: "Trending",
    categoryLink: "/category/trending",
    postLink: "/blog/javascript-frameworks-2024",
    date: "March 28, 2023",
    readTime: "3 min read",
    title: "10 JavaScript Frameworks for Web Development in 2024",
    description:
      "Stay ahead of the curve with these emerging trends in UI/UX design.",
    author: "Mike Johnson",
    tags: ["JavaScript", "Frameworks", "2024"],
  },
];

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <article className="blog-card rounded-2 shadow-sm h-100 d-flex flex-column">
        <div className="blog-card__image position-relative flex-shrink-0">
          <div className="zoom-img rounded-top-2 overflow-hidden">
            <img
              className="w-100"
              src={post.image}
              alt={post.title}
              loading="lazy"
            />
            <Link
              className="position-absolute bottom-0 start-0 m-3 text-dark border border-white fw-medium px-3 py-1 fs-7 bg-white rounded-2 hover-lift"
              href={post.categoryLink}
            >
              {post.category}
            </Link>
            <Link
              href={post.postLink}
              className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape rounded-circle bg-white text-dark d-flex align-items-center justify-content-center hover-lift"
              aria-label={`Read more about ${post.title}`}
            >
              <i className="ri-arrow-right-up-line" />
            </Link>
          </div>
        </div>

        <div className="blog-card__content position-relative p-4 d-flex flex-column flex-grow-1">
          <div className="blog-meta mb-2">
            <span className="text-muted fs-7">
              {post.date} {post.readTime && `• ${post.readTime}`}
            </span>
            {post.author && (
              <span className="text-muted fs-7 ms-2">• By {post.author}</span>
            )}
          </div>

          <h5 className="blog-card__title mb-3">{post.title}</h5>

          <p className="blog-card__description text-muted mb-4 flex-grow-1">
            {post.description}
          </p>

          {post.tags && post.tags.length > 0 && (
            <div className="blog-tags mt-auto">
              <div className="d-flex flex-wrap gap-2">
                {post.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="badge bg-light text-dark fs-8 px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          <Link
            href={post.postLink}
            className="link-overlay position-absolute top-0 start-0 w-100 h-100"
            aria-label={`Read full article: ${post.title}`}
          />
        </div>
      </article>
    </div>
  );
};

const CategoryFilter = ({
  categories,
  activeCategory,
  onCategoryChange,
}: {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}) => {
  return (
    <div className="category-filter mb-6">
      <div className="d-flex flex-wrap justify-content-center gap-3">
        <button
          className={`btn btn-sm ${
            activeCategory === "all" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => onCategoryChange("all")}
        >
          All Posts
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`btn btn-sm ${
              activeCategory === category
                ? "btn-primary"
                : "btn-outline-primary"
            }`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default function BlogSection({
  posts = defaultBlogPosts,
  title = "From Blog",
  subtitle = "Latest Posts",
  maxPosts,
  showCategoryFilter = false,
  className = "",
}: BlogSectionProps) {
  // Get unique categories for filter
  const categories = Array.from(new Set(posts.map((post) => post.category)));

  // Filter posts based on maxPosts limit
  const displayedPosts = maxPosts ? posts.slice(0, maxPosts) : posts;

  return (
    <section
      id="blog"
      className={`section-blog-2 position-relative py-60 ${className}`}
    >
      <div className="container">
        <div className="text-center mb-8">
          <div className="d-flex align-items-center justify-content-center mb-3">
            <svg
              className="text-primary-2 me-2"
              xmlns="http://www.w3.org/2000/svg"
              width={5}
              height={6}
              viewBox="0 0 5 6"
              fill="none"
            >
              <circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
            </svg>
            <span className="text-linear-4 d-flex align-items-center fw-medium">
              {subtitle}
            </span>
          </div>
          <h3 className="mb-4">{title}</h3>

          {showCategoryFilter && (
            <CategoryFilter
              categories={categories}
              activeCategory={"all"}
              onCategoryChange={(category) => {
                // Handle category change - this would update state in a real implementation
                console.log("Category changed to:", category);
              }}
            />
          )}
        </div>

        <div className="row justify-content-center">
          {displayedPosts.length > 0 ? (
            displayedPosts.map((post) => <BlogCard key={post.id} post={post} />)
          ) : (
            <div className="col-12 text-center py-5">
              <p className="text-muted">No blog posts found.</p>
            </div>
          )}
        </div>

        {maxPosts && posts.length > maxPosts && (
          <div className="text-center mt-6">
            <Link href="/blog" className="btn btn-outline-primary">
              View All Posts
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

// Utility function to fetch blog posts (example)
export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  // In a real application, this would be an API call
  return defaultBlogPosts;
};

// Utility function to get posts by category
export const getPostsByCategory = (
  posts: BlogPost[],
  category: string
): BlogPost[] => {
  if (category === "all") return posts;
  return posts.filter((post) => post.category === category);
};

// Utility function to search posts
export const searchBlogPosts = (
  posts: BlogPost[],
  query: string
): BlogPost[] => {
  const lowercasedQuery = query.toLowerCase();
  return posts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowercasedQuery) ||
      post.description.toLowerCase().includes(lowercasedQuery) ||
      post.tags?.some((tag) => tag.toLowerCase().includes(lowercasedQuery))
  );
};
