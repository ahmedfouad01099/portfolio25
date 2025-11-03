import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Image from "next/image";

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
    category: "MOBILE DEVELOPMENT",
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
    category: "MOBILE DEVELOPMENT",
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
    category: "MOBILE DEVELOPMENT",
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
    category: "MOBILE DEVELOPMENT",
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
    category: "MOBILE DEVELOPMENT",
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
    category: "MOBILE DEVELOPMENT",
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
    category: "BACKEND DEVELOPMENT",
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
    category: "WEB DEVELOPMENT",
  },
];

export default function Work() {
  return (
    <>
      <Layout headerStyle={2} footerStyle={2}>
        <div>
          <section className="section-work pt-120 pb-150">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-lg-auto">
                  <div className="text-center">
                    <Link
                      href="/#"
                      className="btn btn-gradient d-inline-block text-uppercase"
                    >
                      {" "}
                      recent Work{" "}
                    </Link>
                    <h3 className="ds-3 mt-3 mb-4 text-dark">
                      Explore{" "}
                      <span className="text-300">
                        My Latest Work and Discover the
                      </span>{" "}
                      Craftsmanship Behind{" "}
                      <span className="text-300">Each Project</span>
                    </h3>
                    <p className="text-300 fs-5">
                      Explore my latest projects and discover the technical
                      expertise behind each application: <br />a detailed look
                      into how I bring innovation and functionality to life
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="card-scroll mt-8">
                  <div className="cards">
                    {projects.map((project, index) => (
                      <div
                        key={project.id}
                        className="card-custom"
                        data-index={index}
                      >
                        <div className="card__inner bg-6 p-lg-6 p-md-4 p-3">
                          <div className="card__image-container zoom-img position-relative">
                            <Image
                              className="card__image"
                              src={project.image}
                              alt={project.title}
                              width={400}
                              height={300}
                              style={{
                                objectFit: "cover",
                                width: "100%",
                                height: "300px",
                              }}
                            />
                            <Link
                              href={`/projects/${project.id}`}
                              className="card-image-overlay position-absolute start-0 end-0 w-100 h-100"
                            />
                          </div>
                          <div className="card__content px-md-4 px-3">
                            <div className="card__title d-md-flex align-items-center mb-0 mb-lg-2">
                              <Link
                                href={`/projects/${project.id}`}
                                className="card_title_link"
                              >
                                <p className="text-primary mb-0 mb-md-2">
                                  {project.category}
                                </p>
                                <h3 className="fw-semibold">{project.title}</h3>
                              </Link>
                              <Link
                                href={`/projects/${project.id}`}
                                className="card-icon d-none d-md-inline-flex border text-dark border-dark icon-shape ms-auto icon-md rounded-circle"
                              >
                                <i className="ri-arrow-right-up-line" />
                              </Link>
                            </div>
                            <p className="text-300 mb-lg-auto mb-md-4 mb-3">
                              {project.description}
                            </p>
                            <div className="d-md-flex content">
                              <p className="mb-0 fs-7 text-dark text-uppercase w-40">
                                Client
                              </p>
                              <p className="mb-0 card__description text-300 fs-6 mb-0">
                                {project.client}
                              </p>
                            </div>
                            <div className="d-md-flex content">
                              <p className="mb-0 fs-7 text-dark text-uppercase w-40">
                                Completion Time
                              </p>
                              <p className="mb-0 card__description text-300 fs-6 mb-0">
                                {project.completionTime}
                              </p>
                            </div>
                            <div className="d-md-flex content">
                              <p className="mb-0 fs-7 text-dark text-uppercase w-40">
                                Technologies
                              </p>
                              <p className="mb-0 card__description text-300 fs-6 mb-0">
                                {project.technologies
                                  .split(", ")
                                  .slice(0, 3)
                                  .join(", ")}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/*Static 1*/}
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
                            {projects.length}
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

          {/* Contact 1*/}
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
                have a project in mind or just want to chat about development,
                feel free to reach out!
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
                  ahmedfouad.dev
                </h3>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
