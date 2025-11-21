"use client";
import Link from "next/link";
import PerfectScrollbar from "react-perfect-scrollbar";

export default function MobileMenu({ isMobileMenu, handleMobileMenu }: any) {
  return (
    <>
      <div
        className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar button-bg-2 ${
          isMobileMenu ? "sidebar-visible" : ""
        }`}
      >
        <div className="mobile-header-wrapper-inner">
          <div className="mobile-header-logo">
            <Link
              className="d-flex main-logo align-items-center d-inline-flex"
              href="/"
              onClick={handleMobileMenu}
            >
              {/* Add your logo here - using text for now */}
              <div className="bg-primary text-white rounded-3 p-2 me-2">
                <span className="fw-bold">AF</span>
              </div>
              <span className="fs-4 ms-1 text-dark">ahmed.fouad</span>
            </Link>
            <div
              className={`burger-icon burger-icon-white border rounded-3 ${
                isMobileMenu ? "burger-close" : ""
              }`}
              onClick={handleMobileMenu}
            >
              <span className="burger-icon-top" />
              <span className="burger-icon-mid" />
              <span className="burger-icon-bottom" />
            </div>
          </div>
          <div className="mobile-header-content-area">
            <PerfectScrollbar className="perfect-scroll">
              <div className="mobile-menu-wrap mobile-header-border">
                <nav>
                  <ul className="mobile-menu font-heading ps-0">
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        href="/"
                        onClick={handleMobileMenu}
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        href="#services"
                        onClick={handleMobileMenu}
                      >
                        Services
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        href="#portfolio"
                        onClick={handleMobileMenu}
                      >
                        Portfolio
                      </Link>
                    </li>
                    {/* <li className="nav-item">
											<Link className="nav-link" href="/pricing" onClick={handleMobileMenu}>Pricing</Link>
										</li>
										<li className="nav-item">
											<Link className="nav-link" href="/blog-list" onClick={handleMobileMenu}>Blog</Link>
										</li> */}
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        href="/#contact"
                        onClick={handleMobileMenu}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>

                  {/* Contact Info Section with your real data */}
                  <div className="mobile-contact-info mt-5 p-4 bg-light rounded-3">
                    <h6 className="mb-4 text-dark fw-bold">Get In Touch</h6>

                    <div className="contact-item mb-3 d-flex align-items-start">
                      <i className="ri-phone-fill text-primary me-2 mt-1"></i>
                      <div>
                        <small className="text-muted d-block">Phone</small>
                        <Link
                          href="tel:+201099053978"
                          className="text-dark text-decoration-none"
                        >
                          +20 109 905 3978
                        </Link>
                      </div>
                    </div>

                    <div className="contact-item mb-3 d-flex align-items-start">
                      <i className="ri-mail-fill text-primary me-2 mt-1"></i>
                      <div>
                        <small className="text-muted d-block">Email</small>
                        <Link
                          href="mailto:ahmedfouad01099@gmail.com"
                          className="text-dark text-decoration-none"
                        >
                          ahmedfouad01099@gmail.com
                        </Link>
                      </div>
                    </div>

                    <div className="contact-item mb-3 d-flex align-items-start">
                      <i className="ri-github-fill text-primary me-2 mt-1"></i>
                      <div>
                        <small className="text-muted d-block">GitHub</small>
                        <Link
                          href="https://github.com/ahmedfouad01099"
                          target="_blank"
                          className="text-dark text-decoration-none"
                        >
                          @ahmedfouad01099
                        </Link>
                      </div>
                    </div>

                    <div className="contact-item mb-3 d-flex align-items-start">
                      <i className="ri-map-pin-2-fill text-primary me-2 mt-1"></i>
                      <div>
                        <small className="text-muted d-block">Location</small>
                        <Link
                          href="https://maps.google.com/maps?q=Cairo,Egypt"
                          target="_blank"
                          className="text-dark text-decoration-none"
                        >
                          Cairo, Egypt
                        </Link>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="social-links mt-4 pt-3 border-top">
                      <h6 className="mb-3 text-dark fw-bold">Follow Me</h6>
                      <div className="d-flex gap-3">
                        <Link
                          href="https://github.com/ahmedfouad01099"
                          target="_blank"
                          className="social-link btn btn-outline-dark btn-sm"
                          style={{ alignItems: "flex-end" }}
                        >
                          <i className="ri-github-fill"></i> GitHub
                        </Link>
                        <Link
                          href="https://www.linkedin.com/in/ahmed-fouad-b4b9b51a6/"
                          className="social-link btn btn-outline-primary btn-sm"
                          style={{ alignItems: "flex-end" }}
                        >
                          <i className="ri-linkedin-fill"></i> LinkedIn
                        </Link>
                        {/* <Link href="#" className="social-link btn btn-outline-danger btn-sm">
													<i className="ri-behance-fill"></i> Behance
												</Link> */}
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </PerfectScrollbar>
          </div>
        </div>
      </div>
    </>
  );
}
