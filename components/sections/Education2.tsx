interface EducationItem {
  id: number;
  period: string;
  institution: string;
  description: string;
}

interface CourseItem {
  id: number;
  period: string;
  title: string;
  description: string;
}

interface InterestCategory {
  id: number;
  title: string;
  items: string[];
  icon: string;
}

export default function Education2() {
  const educationItems: EducationItem[] = [
    {
      id: 1,
      period: "2017 – 2021",
      institution: "Mansoura University",
      description: "BSc in Software Engineering, Faculty of Computer & Information Science",
    },
  ];

  const coursesItems: CourseItem[] = [
    {
      id: 1,
      period: "Jan 2024 – Present",
      title: "DevOps & Cloud - Udemy",
      description:
        "Docker & Kubernetes (Swarm, Helm, Production) • Microservices Architecture (Node.js, React, CI/CD Pipelines)",
    },
    {
      id: 2,
      period: "Jan 2023 – Present",
      title: "Backend & Architecture - Udemy",
      description:
        "Node.js Professional (Microservices, GraphQL, REST) • Laravel 10 (API Development, MVC Patterns)",
    },
    {
      id: 3,
      period: "Jan 2020 – Present",
      title: "Computer Science Fundamentals - Udemy",
      description:
        "JavaScript Algorithms (Data Structures, Optimization) by Colt Steele",
    },
    {
      id: 4,
      period: "Jan 2020 – Jan 2021",
      title: "Advanced React & Frontend - Udemy",
      description:
        "React Mastery (Hooks, Context, Performance) • React Native Expert (Expo/CLI, Reanimated, Gesture Handler)",
    },
  ];

  const technicalInterests: InterestCategory[] = [
    {
      id: 1,
      title: "Swift & iOS",
      icon: "📱",
      items: [
        "visionOS (spatial computing)",
        "SwiftUI",
        "Core ML for on-device AI",
      ],
    },
    {
      id: 2,
      title: "Android & Kotlin",
      icon: "🤖",
      items: [
        "Native Android development",
        "Jetpack Compose",
        "Coroutines, Ktor",
      ],
    },
    {
      id: 3,
      title: "AI & ML",
      icon: "🧠",
      items: [
        "Core ML & Create ML (on-device ML for iOS)",
        "TensorFlow Lite / PyTorch Mobile",
        "LangChain / OpenAI APIs (LLM integration)",
      ],
    },
    {
      id: 4,
      title: "Backend & APIs",
      icon: "⚙️",
      items: [
        "NestJS (structured Node.js backend)",
        "GraphQL Federation (scalable architecture)",
        "gRPC (high-performance APIs for mobile)",
      ],
    },
  ];

  const certificationsInProgress = [
    {
      id: 1,
      title: "AWS Certified Cloud Practitioner",
      description: "Cloud fundamentals (EC2, S3, Lambda)",
    },
    {
      id: 2,
      title: "AWS Certified Developer (Associate)",
      description: "Serverless, CI/CD, Docker on AWS",
    },
    {
      id: 3,
      title: "Apple Certified Developer (visionOS)",
      description: "Spatial computing & SwiftUI",
    },
    {
      id: 4,
      title: "Google Professional Machine Learning Engineer",
      description: "LLM deployment, TensorFlow",
    },
  ];

  const EducationCard = ({
    title,
    icon,
    items,
    bgClass = "",
  }: {
    title: string;
    icon: JSX.Element;
    items: EducationItem[] | CourseItem[];
    bgClass?: string;
  }) => (
    <div
      className={`rounded-3 border border-1 position-relative h-100 overflow-hidden ${bgClass}`}
    >
      <div
        className={`box-linear-animation p-md-6 p-3 ${
          bgClass ? "" : "box-linear-animation"
        }`}
      >
        <div className="d-flex align-items-center">
          {icon}
          <h2 className="mb-0 ms-2">{title}</h2>
        </div>
        <div className="d-flex flex-column h-100 position-relative mt-5">
          <ul className="ps-3">
            {items.map((item) => (
              <li key={item.id} className="position-relative z-1 mb-3">
                <div className="d-flex gap-2">
                  <p className="text-300 text-nowrap fw-regular mb-0">
                    {item.period}
                  </p>
                  <div>
                    <span className="text-primary-2">
                      {"institution" in item ? item.institution : item.title}
                    </span>
                    <p className="text-dark">{item.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="line-left position-absolute top-0 border-start z-0" />
        </div>
        <div className="bg-overlay position-absolute bottom-0 start-0 z-1" />
      </div>
    </div>
  );

  const educationIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={28}
      viewBox="0 0 24 28"
      fill="none"
    >
      <path
        className="fill-primary-2"
        d="M0 22.667V4.66699C0 2.45786 1.79087 0.666992 4 0.666992H22.6667C23.4031 0.666992 24 1.26395 24 2.00033V26.0003C24 26.7367 23.4031 27.3337 22.6667 27.3337H4.66667C2.08933 27.3337 0 25.2443 0 22.667ZM21.3333 24.667V20.667H4.66667C3.56209 20.667 2.66667 21.5625 2.66667 22.667C2.66667 23.7715 3.56209 24.667 4.66667 24.667H21.3333ZM9.33333 3.33366H4C3.26363 3.33366 2.66667 3.93062 2.66667 4.66699V18.4494C3.27284 18.1614 3.95093 18.0003 4.66667 18.0003H21.3333V3.33366H18.6667V14.0003L14 11.3337L9.33333 14.0003V3.33366Z"
        fill="#62A92B"
      />
    </svg>
  );

  const researchIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        className="fill-primary-2"
        d="M20 4H28V10.6667H25.3333V6.66667H20V4ZM12 4V6.66667H6.66667V10.6667H4V4H12ZM20 28V25.3333H25.3333V21.3333H28V28H20ZM12 28H4V21.3333H6.66667V25.3333H12V28ZM4 14.6667H28V17.3333H4V14.6667Z"
        fill="#A8FF53"
      />
    </svg>
  );

  return (
    <>
      <section id="resume" className="section-education">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pt-3">
              <EducationCard
                title="Education"
                icon={educationIcon}
                items={educationItems}
              />
            </div>
            <div className="col-lg-6 pt-3">
              <EducationCard
                title="Courses & Certifications"
                icon={researchIcon}
                items={coursesItems}
                bgClass="bg-3"
              />
            </div>
          </div>

          {/* Technical Interests Section */}
          <div className="row mt-5">
            <div className="col-12">
              <div className="rounded-3 border border-1 position-relative overflow-hidden">
                <div className="box-linear-animation position-relative z-1">
                  <div className="p-lg-8 p-md-6 p-3 position-relative z-1">
                    <div className="d-flex align-items-center mb-5">
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
                        Technical Interests
                      </span>
                    </div>

                    <div className="row g-4">
                      {technicalInterests.map((interest) => (
                        <div key={interest.id} className="col-lg-3 col-md-6">
                          <div className="border border-1 rounded-3 p-4 h-100 bg-3">
                            <div className="d-flex align-items-center mb-3">
                              <span className="fs-3 me-2">{interest.icon}</span>
                              <h5 className="mb-0 text-primary-2">
                                {interest.title}
                              </h5>
                            </div>
                            <ul className="list-unstyled mb-0">
                              {interest.items.map((item, index) => (
                                <li key={index} className="text-300 mb-2">
                                  • {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5">
                      <h5 className="text-linear-4 mb-4">
                        Certifications in Progress
                      </h5>
                      <div className="row g-3">
                        {certificationsInProgress.map((cert) => (
                          <div key={cert.id} className="col-lg-6 col-md-6">
                            <div className="border border-1 rounded-3 p-3 d-flex align-items-start gap-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 20 20"
                                fill="none"
                                className="mt-1 flex-shrink-0"
                              >
                                <path
                                  d="M10 0L12.2451 6.90983L19.5106 6.90983L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983L7.75486 6.90983L10 0Z"
                                  fill="#A8FF53"
                                />
                              </svg>
                              <div>
                                <h6 className="mb-1 text-dark">{cert.title}</h6>
                                <p className="text-300 mb-0 small">
                                  {cert.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <img
                    className="position-absolute top-0 start-0 z-0"
                    src="assets/imgs/home-page-2/services/bg.png"
                    alt="zelio"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
