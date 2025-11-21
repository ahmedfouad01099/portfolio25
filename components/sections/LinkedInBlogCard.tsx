export default function LinkedInBlogCard() {
  const posts = [
    {
      id: 1,
      category: "LinkedIn",
      iframeSrc:
        "https://www.linkedin.com/embed/feed/update/urn:li:share:7388126219592077312?collapsed=1",
      height: 670,
      title: "React Native Biometric Login – أهم النقاط قبل التطبيق",
      description:
        "نصائح مهمة قبل تنفيذ تسجيل الدخول بالبصمة في React Native — الأمان، التخزين، الـ UX، والـ backend integration.",
      date: "Shared Post",
      postUrl:
        "https://www.linkedin.com/posts/ahmed-fouad-b4b9b51a6_reactnative-biometricauth-mobilesecurity-activity-7388126220862885888-HZDk",
    },
    {
      id: 2,
      iframeSrc:
        "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7391094609688379393",
      postUrl:
        "https://www.linkedin.com/posts/ahmed-fouad-b4b9b51a6_%D8%A3%D9%83%D9%8A%D8%AF-%D9%83%D9%84%D9%86%D8%A7-%D9%81%D9%8A-interviews-%D8%A3%D9%88-%D8%AD%D8%AA%D9%89-%D9%88%D8%B3%D8%B7-%D8%A7%D9%84%D8%B4%D8%BA%D9%84-activity-7391094648880005120-Kjcw",
      height: 670,
      category: "LinkedIn",
      date: "Shared Post",
      title: "Why FlatList Is Better Than ScrollView in React Native?",
      description:
        "Explanation of how FlatList saves memory using virtualization, recycling views, and rendering only what's visible on screen for high performance.",
    },
    {
      id: 3,
      iframeSrc:
        "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7395671175936413696",
      postUrl:
        "https://www.linkedin.com/posts/ahmed-fouad-b4b9b51a6_reactnative-mobiledevelopment-javascript-activity-7395671293422997505-CVZ2",
      height: 670,
      category: "LinkedIn",
      date: "Shared Post",
      title: "React Native Event Loop & State Updates",
      description:
        "A deep explanation of how fast events interact with the JS thread and why functional updates matter.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="row mt-8">
        {posts.map((post) => (
          <div key={post.id} className="col-lg-4">
            <a href={post.postUrl} target="_blank" rel="noopener noreferrer">
              <div className="blog-card rounded-top-2 mb-lg-3 mb-md-5 mb-3 cursor-pointer">
                <div className="blog-card__image position-relative">
                  <div className="zoom-img rounded-2 overflow-hidden">
                    <iframe
                      src={post.iframeSrc}
                      height={post.height}
                      width="100%"
                      frameBorder="0"
                      allowFullScreen
                      title={post.title}
                      className="w-100 pointer-events-none"
                      style={{ minHeight: 400 }}
                    ></iframe>

                    <span className="position-absolute bottom-0 start-0 m-3 text-white-keep border border-white fw-medium px-3 py-1 fs-7 bg-white rounded-2">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="blog-card__content position-relative text-center mt-4">
                  <span className="blog-card__date fs-7">{post.date}</span>
                  <h6 className="blog-card__title mt-2">{post.title}</h6>
                  <p className="blog-card__description fs-7">
                    {post.description}
                  </p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
