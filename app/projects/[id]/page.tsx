// app/projects/[id]/page.tsx
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { notFound } from "next/navigation";
import ImageCarousel from "@/components/ImageCarousel";

const projects = [
  {
    id: 1,
    title: "LOC App - Label on a Cable",
    description:
      "An asset identification software platform for efficient, cost effective and reliable tracking of all assets within an organization. LOC makes the passive, smart – by bringing passive labels to life.",
    image: "https://i.postimg.cc/9Xb45B5H/logo.webp",
    images: [
      "      https://i.postimg.cc/qMZzgM7q/1.webp",
      "https://i.postimg.cc/c45r64JH/2.webp",
      "https://i.postimg.cc/vHScDHmm/3.webp",
      "https://i.postimg.cc/15Yf45z3/4.webp",
      "https://i.postimg.cc/jdkLCdjq/5.webp",
    ],
    client: "Label on a Cable",
    completionTime: "6 months",
    technologies:
      "Javascript, React Native CLI, Redux, React Navigation, React Query, NFC Manager, Lottie, SVG",
    liveDemoLink:
      "https://apps.apple.com/fi/app/loc-label-on-a-cable/id1643531827?platform=ipad",
    githubLink: "https://github.com/ahmedfouad01099/LOC",
    features: [
      "NFC-powered asset tracking and management system",
      "Offline-first architecture with background synchronization",
      "Real-time inventory management and reporting",
      "Cross-platform compatibility for iOS and Android devices",
      "Secure data encryption and user authentication",
    ],
    technologiesDetailed: [
      "Frontend: React Native CLI, Redux, React Navigation, Lottie",
      "Backend: Node.js, Express.js, MongoDB",
      "Database: SQLite for offline storage, MongoDB for cloud",
      "APIs: React Native NFC Manager for asset scanning",
      "State Management: Redux with Redux Thunk for async operations",
      "Animation: Lottie for smooth animations and loading states",
    ],
    designHighlights: [
      "Intuitive user interface for easy asset management",
      "Responsive design adapting to various screen sizes",
      "Clean and professional visual design",
      "Accessibility features for diverse user needs",
    ],
  },
  {
    id: 2,
    title: "CANNULA - Medical Services Platform",
    description:
      "A medical services platform where doctors/nurses can register as service providers and connect with patients. Patients can request services, find doctor locations, and choose between urgent, corona, elder care services.",
    image: "https://i.postimg.cc/CLKRFfSN/logo.webp",
    images: [
      "https://i.postimg.cc/BnrbcYDg/c-1.webp",
      "https://i.postimg.cc/Hkqn4Z5w/c-2.webp",
      "https://i.postimg.cc/Nj3F7JTR/c-3.webp",
      "https://i.postimg.cc/jSwCf0WX/c-4.webp",
      "https://i.postimg.cc/XYGX5SZF/c-5.webp",
      "https://i.postimg.cc/SxBR7T8T/c-6.webp",
      "https://i.postimg.cc/4xDybLtw/c-7.webp",
      "https://i.postimg.cc/bwDdncG9/c-8.webp",
      "https://i.postimg.cc/Gm89DwBP/c-9.webp",
    ],
    client: "CANNULA FOR MEDICAL SERVICES",
    completionTime: "6 months",
    technologies:
      "Javascript, Expo, React Navigation, Redux, Location Services, Notifications, Maps, React Query",
    liveDemoLink:
      "https://apps.apple.com/eg/app/cannula/id1602269914?platform=iphone",
    githubLink: "https://github.com/ahmedfouad01099/canola",
    features: [
      "Real-time doctor-patient matching algorithm",
      "Location-based service provider discovery",
      "Secure medical service requests and scheduling",
      "Multi-language support for diverse user base",
      "Emergency services and urgent care options",
    ],
    technologiesDetailed: [
      "Frontend: React Native Expo, Redux, React Navigation",
      "Location: Expo Location Services, React Native Maps",
      "Notifications: Expo Push Notifications for alerts",
      "State Management: Redux with async actions",
      "Database: Firebase Firestore for real-time data",
    ],
    designHighlights: [
      "User-friendly interface for medical professionals",
      "Emergency-focused design with quick access features",
      "Multi-language support with RTL compatibility",
      "Accessible design for users with disabilities",
    ],
  },
  {
    id: 3,
    title: "Hedeya Stores - Mothers & Kids E-commerce",
    description:
      "The leading mothers and kids store in Egypt & Middle East for toys, newborn necessities, mum's stuff, learning games, bathing necessities, car seats, strollers, and nursery items.",
    image: "https://i.postimg.cc/CM7ZT4Tf/logo.webp",
    images: [
      "https://i.postimg.cc/J7xyVQVk/h-1.webp",
      "https://i.postimg.cc/9Xb45B50/h-2.webp",
      "https://i.postimg.cc/3r1y5Z5R/h-3.webp",
      "https://i.postimg.cc/ZYH9tLt4/h-4.webp",
    ],
    client: "Hedeya Stores",
    completionTime: "6 months",
    technologies:
      "Javascript, React Native CLI, React Navigation, Axios, Firebase, SQLite, Redux, React Query",
    liveDemoLink: "https://apps.apple.com/eg/app/hedeya-stores/id1039973157",
    githubLink: "https://bitbucket.org/hedeya/hedeya-mobile/src/master/",
    features: [
      "Complete e-commerce shopping experience",
      "Product catalog with advanced filtering",
      "Secure payment gateway integration",
      "Order tracking and management system",
      "Wishlist and favorite products functionality",
    ],
    technologiesDetailed: [
      "Frontend: React Native CLI, Redux, React Navigation",
      "Backend: Node.js, Express.js, MongoDB",
      "Payment: Stripe and local payment gateways",
      "Database: SQLite for offline cart, MongoDB for products",
      "State Management: Redux with persistent storage",
    ],
    designHighlights: [
      "Family-friendly design appealing to parents",
      "Easy navigation for product discovery",
      "Visual product catalogs with high-quality images",
      "Streamlined checkout process",
    ],
  },
  {
    id: 4,
    title: "Usedo - Secondhand Selling Platform",
    description:
      "Kuwait's only secondhand selling app that eliminates meetups with secure payment gateway and reliable delivery services. Makes buying and selling secondhand items easy and exceptional.",
    image: "https://i.postimg.cc/pX1pyXdH/logo.webp",
    images: [
      "https://i.postimg.cc/ZKDC0KqT/u-1.webp",
      "https://i.postimg.cc/CL6zdLK0/u-2.webp",
      "https://i.postimg.cc/NfP5Lf0h/u-3.webp",
      "https://i.postimg.cc/pX1pyXLg/u-4.webp",
    ],
    client: "Usedo | Sell & Buy Online",
    completionTime: "6 months",
    technologies:
      "Typescript, React Native CLI, React Navigation, Axios, KNET Payment, Webview, Redux-Saga, Firebase",
    liveDemoLink:
      "https://apps.apple.com/eg/app/usedo-sell-buy-online/id1523226674",
    githubLink: "https://bitbucket.org/microtechnologies/app-usedoo",
    features: [
      "Secure peer-to-peer transaction system",
      "Integrated payment gateway with KNET support",
      "Professional delivery service integration",
      "Product verification and quality assurance",
      "User rating and review system",
    ],
    technologiesDetailed: [
      "Frontend: React Native CLI, TypeScript, Redux-Saga",
      "Payment: KNET payment gateway integration",
      "Backend: Node.js, Express.js, MongoDB",
      "State Management: Redux-Saga for side effects",
      "Authentication: Firebase Auth for user management",
    ],
    designHighlights: [
      "Trust-focused design for secondhand marketplace",
      "Clear product presentation and verification",
      "Secure transaction flow design",
      "User-friendly buying and selling processes",
    ],
  },
  {
    id: 5,
    title: "Sala Hub - Entertainment Platform",
    description:
      "A leader in KSA's entertainment sector focusing on family bonding and social development. Enhances quality of life by spreading joy and driving progress throughout the Kingdom.",
    image: "https://i.postimg.cc/02Nz8JP7/logo.webp",
    images: [
      "https://i.postimg.cc/zXfyJR8p/s-1.webp",
      "https://i.postimg.cc/qM7NkC4K/s-2.webp",
      "https://i.postimg.cc/kX52ntqD/s-3.webp",
      "https://i.postimg.cc/8k4FQbQv/s-4.webp",
    ],
    client: "Sala Entertainment",
    completionTime: "6 months",
    technologies:
      "Typescript, React Native CLI, Redux, React Navigation, Apollo Client, Firebase, Payment Processing",
    liveDemoLink: "https://apps.apple.com/eg/app/sala-hub/id1582542716",
    githubLink: "https://github.com/TCF-Sala/mobile",
    features: [
      "Event booking and ticket management",
      "Venue discovery and reservation system",
      "Family-friendly activity recommendations",
      "Social features and event sharing",
      "Multi-language support for international users",
    ],
    technologiesDetailed: [
      "Frontend: React Native CLI, TypeScript, Apollo Client",
      "Backend: GraphQL API with Node.js",
      "Payment: Integrated payment processing",
      "Database: MongoDB with complex querying",
      "State Management: Redux with GraphQL integration",
    ],
    designHighlights: [
      "Entertainment-focused vibrant design",
      "Family-oriented user experience",
      "Easy event discovery and booking",
      "Social sharing and engagement features",
    ],
  },
  {
    id: 6,
    title: "Tactec - Football Management System",
    description:
      "Comprehensive football management app for players, tactical, medical & management journeys to help clubs increase efficiency and performance.",
    image: "https://i.postimg.cc/9fxWgLqC/logo.webp",
    images: [
      "https://i.postimg.cc/BQwXtQnV/t-1.webp",
      "https://i.postimg.cc/ncLXHQp6/t-2.webp",
      "https://i.postimg.cc/CLKRFfS2/t-3.webp",
      "https://i.postimg.cc/TYPKRWf4/t-4.webp",
      "https://i.postimg.cc/hPGXS7c2/t-5.webp",
      "https://i.postimg.cc/xTFcqT1Z/t-6.webp",
      "https://i.postimg.cc/8PnjsPz9/t-7.webp",
      "https://i.postimg.cc/vHm4Q6b2/t-8.webp",
    ],
    client: "Tactec Football",
    completionTime: "6 months",
    technologies:
      "Typescript, React Native CLI, Redux, React Navigation, React Query, Firebase, Real-time Features",
    liveDemoLink: "https://apps.apple.com/us/app/tactec/id1668711028",
    githubLink: "https://github.com/ahmedfouad01099/UDAlmeria",
    features: [
      "Player performance tracking and analytics",
      "Tactical session planning and execution",
      "Medical and fitness monitoring",
      "Team management and communication tools",
      "Real-time match statistics and analysis",
    ],
    technologiesDetailed: [
      "Frontend: React Native CLI, TypeScript, React Query",
      "Backend: Node.js, Express.js, Socket.io",
      "Database: MongoDB with real-time capabilities",
      "Analytics: Custom performance tracking algorithms",
      "State Management: Redux with real-time updates",
    ],
    designHighlights: [
      "Sports-focused professional interface",
      "Data visualization for performance metrics",
      "Coach and player-specific workflows",
      "Real-time updating during matches and sessions",
    ],
  },
  {
    id: 7,
    title: "Vendoria - E-commerce Backend System",
    description:
      "Robust backend system for e-commerce platform with user authentication, payment processing, inventory management, and real-time features.",
    image: "https://i.postimg.cc/sfmBdJd1/logo.png",
    images: ["https://i.postimg.cc/y6jJ4T4k/vendoria.png"],
    client: "Vendoria",
    completionTime: "6 months",
    technologies:
      "Javascript, Express, MongoDB, JWT, Socket.io, Stripe, PayPal, Cloudinary, Nodemailer",
    liveDemoLink:
      "https://www.apidog.com/apidoc/shared-fd59d3bb-1115-4e3a-b8f5-3fe5a56ca00d/doc-705458",
    githubLink: "https://github.com/Vendoria/backend",
    features: [
      "Complete user authentication and authorization",
      "Multi-payment gateway integration (Stripe, PayPal)",
      "Real-time inventory management system",
      "Order processing and fulfillment tracking",
      "Admin dashboard with analytics and reporting",
    ],
    technologiesDetailed: [
      "Backend: Node.js, Express.js, Socket.io",
      "Database: MongoDB with Mongoose ODM",
      "Authentication: JWT with refresh tokens",
      "Payment: Stripe, PayPal integration",
      "File Management: Cloudinary for media storage",
      "Email: Nodemailer for notifications",
    ],
    designHighlights: [
      "RESTful API architecture",
      "Scalable microservices design",
      "Comprehensive documentation",
      "Secure payment processing flow",
    ],
  },
  {
    id: 8,
    title: "Vendoria Dashboard - Admin Management System",
    description:
      "Comprehensive admin dashboard for managing e-commerce operations, analytics, user management, and business intelligence.",
    image: "https://i.postimg.cc/ZKFzDw1g/1.png",
    images: [
      "https://i.postimg.cc/ZKFzDw1g/a-1.png",
      "https://i.postimg.cc/PrznFSB4/a-2.png",
      "https://i.postimg.cc/Hs41P6f6/a-3.png",
      "https://i.postimg.cc/wTcYbwS5/a-4.png",
      "https://i.postimg.cc/Nfww43Pb/a-5.png",
      "https://i.postimg.cc/jdQYkMG7/a-6.png",
      "https://i.postimg.cc/L6BF0xrP/a-7.png",
    ],
    client: "Vendoria",
    completionTime: "6 months",
    technologies:
      "Javascript, ReactJs, Redux Toolkit, Cloudinary, Chart.js, Socket.io, React Hook Form, i18next",
    liveDemoLink:
      "https://www.apidog.com/apidoc/shared-fd59d3bb-1115-4e3a-b8f5-3fe5a56ca00d/doc-705458",
    githubLink: "https://github.com/Vendoria/backend",
    features: [
      "Real-time business analytics and reporting",
      "User management and role-based access control",
      "Product and inventory management system",
      "Order processing and customer service tools",
      "Multi-language admin interface",
    ],
    technologiesDetailed: [
      "Frontend: React.js, Redux Toolkit, Chart.js",
      "Backend: Node.js, Express.js, Socket.io",
      "Charts: Chart.js for data visualization",
      "Forms: React Hook Form for complex forms",
      "Internationalization: i18next for multi-language",
    ],
    designHighlights: [
      "Admin-focused dashboard design",
      "Data visualization with interactive charts",
      "Efficient workflow for management tasks",
      "Responsive design for various devices",
    ],
  },
];

interface PageProps {
  params: {
    id: string;
  };
}

export default function WorkSingle({ params }: PageProps) {
  const { id } = params;
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Layout headerStyle={2} footerStyle={2}>
        <div>
          <section className="section-work-single section-padding">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-lg-auto mb-lg-0">
                  <div className="text-center">
                    <Link
                      href="/projects"
                      className="btn btn-gradient d-inline-block text-uppercase"
                    >
                      work details
                    </Link>
                    <h3 className="ds-3 mt-3 mb-4 text-dark">
                      {project.title}
                    </h3>
                    <p className="text-300 fs-5 mb-0">{project.description}</p>
                  </div>
                </div>

                <div className="d-flex flex-wrap justify-content-center gap-4 py-8">
                  <div className="bg-6 px-5 py-3 rounded-2">
                    <p className="text-300 mb-0">Client</p>
                    <h6>{project.client}</h6>
                  </div>
                  <div className="bg-6 px-5 py-3 rounded-2">
                    <p className="text-300 mb-0">Completion Time</p>
                    <h6>{project.completionTime}</h6>
                  </div>
                  <div className="bg-6 px-5 py-3 rounded-2">
                    <p className="text-300 mb-0">Technologies</p>
                    <h6>
                      {project.technologies.split(", ").slice(0, 3).join(", ")}
                    </h6>
                  </div>
                  <div className="bg-6 px-5 py-3 rounded-2">
                    <p className="text-300 mb-0">Live Demo</p>
                    <h6>
                      <Link
                        href={project.liveDemoLink}
                        target="_blank"
                        className="text-decoration-none text-dark"
                      >
                        View App
                      </Link>
                    </h6>
                  </div>
                  <div className="bg-6 px-5 py-3 rounded-2">
                    <p className="text-300 mb-0">Source Code</p>
                    <h6>
                      <Link
                        href={project.githubLink}
                        target="_blank"
                        className="text-decoration-none text-dark"
                      >
                        GitHub
                      </Link>
                    </h6>
                  </div>
                </div>

                {/* Image Carousel Section */}
                <div className="col-12 mb-8">
                  <ImageCarousel images={project.images} />
                </div>

                <div className="col-lg-8 mx-lg-auto mt-8">
                  <h5 className="fs-5 fw-medium">Project Description</h5>
                  <p className="text-300">{project.description}</p>

                  <h5 className="fs-5 fw-medium mt-5">Key Features</h5>
                  <ul className="list-unstyled">
                    {project.features.map((feature, index) => (
                      <li key={index} className="mb-3">
                        <p className="text-dark fw-bold mb-1">
                          <i className="ri-checkbox-circle-fill text-primary me-2"></i>
                          {feature}
                        </p>
                      </li>
                    ))}
                  </ul>

                  <h5 className="fs-5 fw-medium mt-5">Technologies Used</h5>
                  <ul className="list-unstyled">
                    {project.technologiesDetailed.map((tech, index) => (
                      <li key={index} className="mb-2">
                        <p className="text-dark fw-bold mb-1">
                          {tech.split(":")[0]}:{" "}
                          <span className="text-300 fw-medium">
                            {tech.split(":").slice(1).join(":")}
                          </span>
                        </p>
                      </li>
                    ))}
                  </ul>

                  <h5 className="fs-5 fw-medium mt-5">Design Highlights</h5>
                  <ul className="list-unstyled">
                    {project.designHighlights.map((highlight, index) => (
                      <li key={index} className="mb-2">
                        <p className="text-dark fw-bold mb-1">
                          <i className="ri-star-fill text-warning me-2"></i>
                          {highlight}
                        </p>
                      </li>
                    ))}
                  </ul>

                  <div className="d-flex flex-wrap gap-3 mt-6 pt-4 border-top">
                    <Link
                      href={project.liveDemoLink}
                      className="btn btn-primary rounded-2 d-flex align-items-center"
                      target="_blank"
                    >
                      <i className="ri-external-link-line me-2"></i>
                      Live Demo
                    </Link>
                    <Link
                      href={project.githubLink}
                      className="btn btn-outline-primary rounded-2 d-flex align-items-center"
                      target="_blank"
                    >
                      <i className="ri-github-fill me-2"></i>
                      View Source Code
                    </Link>
                    <Link
                      href="/projects"
                      className="btn btn-secondary rounded-2 d-flex align-items-center"
                    >
                      <i className="ri-arrow-left-line me-2"></i>
                      Back to Projects
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Static Stats Section */}
          <div className="section-static-1 position-relative overflow-hidden z-0 py-8 bg-6">
            <div className="container">
              <div className="inner">
                <div className="row align-items-center justify-content-between">
                  <div className="col-lg-auto col-md-6">
                    <div className="counter-item-cover counter-item">
                      <div className="content text-center mx-auto d-flex align-items-center">
                        <span className="ds-3 count text-primary fw-medium my-0">
                          +
                          <span className="odometer ds-1 text-dark fw-semibold">
                            5
                          </span>
                        </span>
                        <div className="text-start ms-2">
                          <p className="fs-5 mb-0 text-300">Year of</p>
                          <p className="fs-5 mb-0 fw-bold">Experience</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-auto col-md-6">
                    <div className="counter-item-cover counter-item">
                      <div className="content text-center mx-auto d-flex align-items-center">
                        <span className="ds-3 count text-primary fw-medium my-0">
                          +
                          <span className="odometer ds-1 text-dark fw-semibold">
                            {projects.length + 4}
                          </span>
                        </span>
                        <div className="text-start ms-2">
                          <p className="fs-5 mb-0 text-300">Projects</p>
                          <p className="fs-5 mb-0 fw-bold">Completed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-auto col-md-6">
                    <div className="counter-item-cover counter-item">
                      <div className="content text-center mx-auto d-flex align-items-center">
                        <span className="ds-3 count text-primary fw-medium my-0">
                          +
                          <span className="odometer ds-1 text-dark fw-semibold">
                            12
                          </span>
                        </span>
                        <div className="text-start ms-2">
                          <p className="fs-5 mb-0 text-300">Satisfied</p>
                          <p className="fs-5 mb-0 fw-bold">Happy Clients</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <section
            id="contact"
            className="section-contact-1 bg-900 position-relative pt-150 pb-lg-250 pb-150 overflow-hidden"
          >
            <div className="container position-relative z-1">
              <h3 className="ds-3 mt-3 mb-3 text-primary">Get in touch</h3>
              <span className="fs-5 fw-medium text-200">
                I'm always excited to take on new projects and collaborate with
                innovative minds. If you
                <br />
                have a project in mind or just want to chat about design, feel
                free to reach out!
              </span>
              <div className="row mt-8">
                <div className="col-lg-4 d-flex flex-column">
                  <div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
                    <div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
                      <i className="ri-phone-fill text-primary fs-26" />
                    </div>
                    <div className="ps-3">
                      <span className="text-400 fs-5">Phone Number</span>
                      <h6 className="mb-0">+20 1099053978</h6>
                    </div>
                    <Link
                      href="tel:+201099053978"
                      className="position-absolute top-0 start-0 w-100 h-100"
                    />
                  </div>
                  <div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
                    <div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
                      <i className="ri-mail-fill text-primary fs-26" />
                    </div>
                    <div className="ps-3">
                      <span className="text-400 fs-5">Email</span>
                      <h6 className="mb-0">ahmedfouad01099@gmail.com</h6>
                    </div>
                    <Link
                      href="mailto:ahmedfouad01099@gmail.com"
                      className="position-absolute top-0 start-0 w-100 h-100"
                    />
                  </div>
                  <div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
                    <div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
                      <i className="ri-github-fill text-primary fs-26" />
                    </div>
                    <div className="ps-3">
                      <span className="text-400 fs-5">GitHub</span>
                      <h6 className="mb-0">ahmedfouad01099</h6>
                    </div>
                    <Link
                      href="https://github.com/ahmedfouad01099"
                      target="_blank"
                      className="position-absolute top-0 start-0 w-100 h-100"
                    />
                  </div>
                  <div className="d-flex align-items-center mb-4 position-relative d-inline-flex">
                    <div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4">
                      <i className="ri-map-pin-fill text-primary fs-26" />
                    </div>
                    <div className="ps-3">
                      <span className="text-400 fs-5">Location</span>
                      <h6 className="mb-0">Cairo, Egypt</h6>
                    </div>
                    <Link
                      href="https://maps.google.com/maps?q=Cairo,+Egypt"
                      target="_blank"
                      className="position-absolute top-0 start-0 w-100 h-100"
                    />
                  </div>
                </div>
                <div className="col-lg-7 offset-lg-1 ps-lg-0 pt-5 pt-lg-0">
                  <div className="position-relative">
                    <div className="position-relative z-2">
                      <h3>Leave a message</h3>
                      <form action="#">
                        <div className="row mt-3">
                          <div className="col-md-6 ">
                            <label
                              className="mb-1 mt-3 text-dark"
                              htmlFor="name"
                            >
                              Your name <span className="text-primary">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control border rounded-3"
                              id="name"
                              name="name"
                              placeholder="John Doe"
                              aria-label="username"
                            />
                          </div>
                          <div className="col-md-6">
                            <label
                              className="mb-1 mt-3 text-dark"
                              htmlFor="email"
                            >
                              Email address{" "}
                              <span className="text-primary">*</span>
                            </label>
                            <input
                              type="email"
                              className="form-control border rounded-3"
                              id="email"
                              name="email"
                              placeholder="ahmedfouad01099@gmail.com"
                              aria-label="email"
                            />
                          </div>
                          <div className="col-md-6">
                            <label
                              className="mb-1 mt-3 text-dark"
                              htmlFor="phone"
                            >
                              Your phone <span className="text-primary">*</span>
                            </label>
                            <input
                              type="tel"
                              className="form-control border rounded-3"
                              id="phone"
                              name="phone"
                              placeholder="+20 1099053978"
                              aria-label="phone"
                            />
                          </div>
                          <div className="col-md-6">
                            <label
                              className="mb-1 mt-3 text-dark"
                              htmlFor="subject"
                            >
                              Subject <span className="text-primary">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control border rounded-3"
                              id="subject"
                              name="subject"
                              placeholder="I want to discuss a project..."
                              aria-label="subject"
                            />
                          </div>
                          <div className="col-12">
                            <label
                              className="mb-1 mt-3 text-dark"
                              htmlFor="message"
                            >
                              Message <span className="text-primary">*</span>
                            </label>
                            <textarea
                              className="form-control border rounded-3 pb-10"
                              id="message"
                              name="message"
                              placeholder="Hello Ahmed, I'd like to discuss..."
                              aria-label="With textarea"
                              rows={5}
                            />
                          </div>
                          <div className="col-12">
                            <button
                              type="submit"
                              className="btn btn-gradient mt-3"
                            >
                              Send Message
                              <i className="ri-arrow-right-up-line" />
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="z-0 bg-primary-dark rectangle-bg z-1 rounded-3" />
                  </div>
                </div>
              </div>
            </div>
            <div className="scroll-move-right position-absolute bottom-0 start-50 translate-middle-x bg-900 overflow-hidden">
              <div className="wow img-custom-anim-top">
                <h3 className="stroke fs-280 text-lowercase text-900 mb-0 lh-1">
                  william.design
                </h3>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const project = projects.find((p) => p.id.toString() === params.id);

  return {
    title: project ? `${project.title} - Project Details` : "Project Not Found",
    description: project?.description,
  };
}
