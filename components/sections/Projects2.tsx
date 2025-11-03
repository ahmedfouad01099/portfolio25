"use client";
import Link from "next/link";
import { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image: string;
  client: string;
  completionTime: string;
  technologies: string;
  liveDemoLink: string;
  githubLink: string;
}

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  slidesPerGroup: 1,
  centeredSlides: false,
  loop: true,
  autoplay: {
    delay: 4000,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};

const projects = [
  {
    id: 1,
    title: "LOC App - Label on a Cable",
    description:
      "An asset identification software platform for efficient, cost effective and reliable tracking of all assets within an organization. LOC makes the passive, smart – by bringing passive labels to life.",
    image: "https://i.postimg.cc/9Xb45B5H/logo.webp",
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

export default function Projects2() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  interface ProjectItem {
    id: number;
    title: string;
    description: string;
    image: string;
    client: string;
    completionTime: string;
    technologies: string;
    liveDemoLink: string;
    githubLink: string;
  }

  const ProjectSlide = ({ project }: { project: ProjectItem }) => (
    <div className="p-lg-5 p-md-4 p-3 border border-1 mt-5 bg-3">
      <div className="row">
        <div className="col-lg-5">
          <img
            className="w-100"
            src={project.image}
            alt={project.title.replace(/<br\s*\/?>/gi, " ")}
          />
        </div>
        <div className="col-lg-7 ps-lg-5 mt-5 mt-lg-0">
          <Link
            href={`/projects/${project.id}`}
            className="text-decoration-none"
            target={project.liveDemoLink ? "_blank" : "_self"}
          >
            <h4
              className="text-linear-4"
              dangerouslySetInnerHTML={{ __html: project.title }}
            />
          </Link>

          <p>{project.description}</p>
          <ul className="mt-4 list-unstyled">
            <li className="text-secondary-2 mb-3 border-bottom pb-3">
              Project Info
            </li>
            <li className="text-dark mb-3 border-bottom pb-3">
              <div className="d-flex justify-content-between">
                <p className="text-dark mb-0 text-end">Client</p>
                <p className="text-300 mb-0 text-end">{project.client}</p>
              </div>
            </li>
            <li className="text-dark mb-3 border-bottom pb-3">
              <div className="d-flex justify-content-between">
                <p className="text-dark mb-0 text-end">Completion Time</p>
                <p className="text-300 mb-0 text-end">
                  {project.completionTime}
                </p>
              </div>
            </li>
            <li className="text-dark mb-3 border-bottom pb-3">
              <div className="d-flex justify-content-between">
                <p className="text-dark mb-0 text-end">Technologies</p>
                <p className="text-300 mb-0 text-end">{project.technologies}</p>
              </div>
            </li>
          </ul>
          <div className="d-flex flex-wrap align-items-center gap-3 mt-7">
            <Link
              href={project.liveDemoLink}
              className="text-300 border-bottom border-1 px-2 pb-2 link-hover"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={13}
                height={13}
                viewBox="0 0 13 13"
                fill="none"
              >
                <path
                  d="M11.0037 3.91421L2.39712 12.5208L0.98291 11.1066L9.5895 2.5H2.00373V0.5H13.0037V11.5H11.0037V3.91421Z"
                  fill="#8F8F92"
                />
              </svg>
              Live Demo
            </Link>
            <Link
              href={project.githubLink}
              className="text-300 border-bottom border-1 px-2 pb-2 link-hover"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={25}
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M12.001 2.5C6.47598 2.5 2.00098 6.975 2.00098 12.5C2.00098 16.925 4.86348 20.6625 8.83848 21.9875C9.33848 22.075 9.52598 21.775 9.52598 21.5125C9.52598 21.275 9.51348 20.4875 9.51348 19.65C7.00098 20.1125 6.35098 19.0375 6.15098 18.475C6.03848 18.1875 5.55098 17.3 5.12598 17.0625C4.77598 16.875 4.27598 16.4125 5.11348 16.4C5.90098 16.3875 6.46348 17.125 6.65098 17.425C7.55098 18.9375 8.98848 18.5125 9.56348 18.25C9.65098 17.6 9.91348 17.1625 10.201 16.9125C7.97598 16.6625 5.65098 15.8 5.65098 11.975C5.65098 10.8875 6.03848 9.9875 6.67598 9.2875C6.57598 9.0375 6.22598 8.0125 6.77598 6.6375C6.77598 6.6375 7.61348 6.375 9.52598 7.6625C10.326 7.4375 11.176 7.325 12.026 7.325C12.876 7.325 13.726 7.4375 14.526 7.6625C16.4385 6.3625 17.276 6.6375 17.276 6.6375C17.826 8.0125 17.476 9.0375 17.376 9.2875C18.0135 9.9875 18.401 10.875 18.401 11.975C18.401 15.8125 16.0635 16.6625 13.8385 16.9125C14.201 17.225 14.5135 17.825 14.5135 18.7625C14.5135 20.1 14.501 21.175 14.501 21.5125C14.501 21.775 14.6885 22.0875 15.1885 21.9875C19.259 20.6133 21.9999 16.7963 22.001 12.5C22.001 6.975 17.526 2.5 12.001 2.5Z"
                  fill="#8F8F92"
                />
              </svg>
              View on Github
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  const handlePrev = () => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    swiperInstance?.slideTo(newIndex);
  };

  const handleNext = () => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    swiperInstance?.slideTo(newIndex);
  };

  const PrevArrow = () => (
    <div
      className="shadow position-relative d-flex align-items-center justify-content-center"
      style={{
        cursor: "pointer",
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        backgroundColor: "#1a1a1a",
        transition: "all 0.3s ease",
      }}
      onClick={handlePrev}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#2a2a2a";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#1a1a1a";
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"
          fill="white"
        />
      </svg>
    </div>
  );

  const NextArrow = () => (
    <div
      className="shadow position-relative d-flex align-items-center justify-content-center"
      style={{
        cursor: "pointer",
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        backgroundColor: "#1a1a1a",
        transition: "all 0.3s ease",
      }}
      onClick={handleNext}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#2a2a2a";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#1a1a1a";
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
          fill="#A8FF53"
        />
      </svg>
    </div>
  );

  return (
    <>
      <div className="section-projects-2 pt-5">
        <div className="container">
          <div className="rounded-3 border border-1 position-relative overflow-hidden">
            <div className="box-linear-animation position-relative z-1">
              <div className="p-lg-8 p-md-6 p-3 position-relative z-1">
                <div className="d-flex align-items-center">
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
                    Projects
                  </span>
                </div>
                <h3>My Recent Works</h3>
                <div className="position-relative">
                  <Swiper
                    {...swiperOptions}
                    onSwiper={setSwiperInstance}
                    onSlideChange={(swiper) =>
                      setCurrentIndex(swiper.realIndex)
                    }
                    className="swiper slider-two pb-3 position-relative"
                  >
                    <div className="swiper-wrapper">
                      {projects.map((project) => (
                        <SwiperSlide key={project.id}>
                          <ProjectSlide project={project} />
                        </SwiperSlide>
                      ))}
                    </div>
                  </Swiper>
                  <div
                    className="position-absolute bottom-0 end-0 gap-2 pb-7 pe-5 d-none d-md-flex"
                    style={{ zIndex: 10 }}
                  >
                    <PrevArrow />
                    <NextArrow />
                  </div>
                </div>
              </div>
              <img
                className="position-absolute top-0 start-0 z-0"
                src="assets/imgs/home-page-2/projects/bg.png"
                alt="zelio"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
