import Link from "next/link";
import LinkedInBlogCard from "./LinkedInBlogCard";

interface BlogPost {
  id: number;
  image: string;
  category: string;
  categoryLink: string;
  postLink: string;
  date: string;
  title: string;
  description: string;
}

export default function Blog2() {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      image: "assets/imgs/home-page-2/blog/img-1.png",
      category: "CEO",
      categoryLink: "#",
      postLink: "/blog-details",
      date: "March 28, 2023 • 3 min read",
      title: "Optimize Your Web Application for Speed",
      description:
        "Stay ahead of the curve with these emerging trends in UI/UX design.",
    },
    {
      id: 2,
      image: "assets/imgs/home-page-2/blog/img-2.png",
      category: "Development",
      categoryLink: "#",
      postLink: "#",
      date: "March 28, 2023 • 3 min read",
      title: "Best Practices for Secure Web Development",
      description:
        "Stay ahead of the curve with these emerging trends in UI/UX design.",
    },
    {
      id: 3,
      image: "assets/imgs/home-page-2/blog/img-3.png",
      category: "Trending",
      categoryLink: "#",
      postLink: "#",
      date: "March 28, 2023 • 3 min read",
      title: "10 JavaScript Frameworks for Web Development in 2024",
      description:
        "Stay ahead of the curve with these emerging trends in UI/UX design.",
    },
  ];

  const BlogCard = ({ post }: { post: BlogPost }) => (
    <div className="col-lg-4">
      <div className="blog-card rounded-top-2 mb-lg-3 mb-md-5 mb-3">
        <div className="blog-card__image position-relative">
          <div className="zoom-img rounded-2 overflow-hidden">
            <img className="w-100" src={post.image} alt="zelio" />
            <Link
              className="position-absolute bottom-0 start-0 m-3 text-white-keep border border-white fw-medium px-3 py-1 fs-7 bg-white rounded-2"
              href={post.categoryLink}
            >
              {post.category}
            </Link>
            <Link
              href={post.postLink}
              className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape rounded-circle"
            >
              <i className="ri-arrow-right-up-line" />
            </Link>
          </div>
        </div>
        <div className="blog-card__content position-relative text-center mt-4">
          <span className="blog-card__date fs-7">{post.date}</span>
          <h6 className="blog-card__title mt-2">{post.title}</h6>
          <p className="blog-card__description fs-7">{post.description}</p>
          <Link
            href={post.postLink}
            className="link-overlay position-absolute top-0 start-0 w-100 h-100"
          />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <section
        id="blog"
        className="section-blog-2 position-relative pt-60 pb-60"
      >
        <div className="container">
          <div className="text-center">
            <div className="d-flex align-items-center justify-content-center">
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
              <span className="text-linear-4 d-flex align-items-center">
                {" "}
                Latest Posts{" "}
              </span>
            </div>
            <h3>From Blog</h3>
          </div>
          <div className="row mt-8">
            {/* {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))} */}

            <LinkedInBlogCard />
          </div>
        </div>
      </section>
    </>
  );
}
