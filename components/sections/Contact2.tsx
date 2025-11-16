"use client";
import Link from "next/link";
import { useState } from "react";

interface ContactInfo {
  id: number;
  icon: string;
  title: string;
  value: string;
  link: string;
  type: "phone" | "email" | "skype" | "address" | "social" | "github";
}

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  contactInfo?: ContactInfo[];
  className?: string;
  showForm?: boolean;
}

const defaultContactInfo: ContactInfo[] = [
  {
    id: 1,
    icon: "ri-phone-fill",
    title: "Phone Number",
    value: "+20 1099053978",
    link: "tel:+201099053978",
    type: "phone",
  },
  {
    id: 2,
    icon: "ri-mail-fill",
    title: "Email",
    value: "ahmedfouad01099@gmail.com",
    link: "mailto:ahmedfouad01099@gmail.com",
    type: "email",
  },
  {
    id: 3,
    icon: "ri-github-fill",
    title: "GitHub",
    value: "ahmedfouad01099",
    link: "https://github.com/ahmedfouad01099",
    type: "github",
  },
  {
    id: 4,
    icon: "ri-map-2-fill",
    title: "Location",
    value: "Cairo, Egypt",
    link: "https://maps.google.com/maps?q=Cairo,Egypt",
    type: "address",
  },
];

const ContactInfoItem = ({ item }: { item: ContactInfo }) => {
  return (
    <div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
      <div className="d-inline-block">
        <div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
          <i className={`${item.icon} text-primary-2 fs-26`} />
        </div>
      </div>
      <div className="ps-3 h-100">
        <span className="text-400 fs-6">{item.title}</span>
        <h6 className="mb-0">{item.value}</h6>
      </div>
      <Link
        href={item.link}
        className="position-absolute top-0 start-0 w-100 h-100"
      />
    </div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate API call - replace with your actual form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Here you would typically send the data to your backend
      console.log("Form submitted:", formData);

      setSubmitStatus("success");
      setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="position-relative">
      <div className="position-relative z-2">
        <h3 className="text-primary-2 mb-3">Let's connect</h3>

        {submitStatus === "success" && (
          <div className="alert alert-success mb-4" role="alert">
            Thank you for your message! We'll get back to you soon.
          </div>
        )}

        {submitStatus === "error" && (
          <div className="alert alert-danger mb-4" role="alert">
            Sorry, there was an error sending your message. Please try again.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control bg-3 border border-1 rounded-3"
                id="name"
                name="name"
                placeholder="Your name"
                aria-label="username"
                value={formData.name}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="col-md-6">
              <input
                type="tel"
                className="form-control bg-3 border border-1 rounded-3"
                id="phone"
                name="phone"
                placeholder="Phone"
                aria-label="phone"
                value={formData.phone}
                onChange={handleInputChange}
                disabled={isSubmitting}
              />
            </div>
            <div className="col-md-6">
              <input
                type="email"
                className="form-control bg-3 border border-1 rounded-3"
                id="email"
                name="email"
                placeholder="Email"
                aria-label="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control bg-3 border border-1 rounded-3"
                id="subject"
                name="subject"
                placeholder="Subject"
                aria-label="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="col-12">
              <textarea
                className="form-control bg-3 border border-1 rounded-3"
                id="message"
                name="message"
                placeholder="Message"
                aria-label="With textarea"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="col-12">
              <button
                type="submit"
                className="btn btn-primary-2 rounded-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <i className="ri-arrow-right-up-line" />
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="z-0 bg-primary-dark rectangle-bg z-1 rounded-3" />
    </div>
  );
};

export default function ContactSection({
  title = "Let's connect",
  contactInfo = defaultContactInfo,
  className = "",
  showForm = true,
}: ContactSectionProps) {
  return (
    <section
      id="contact"
      className={`section-contact-2 position-relative pb-60 overflow-hidden ${className}`}
    >
      <div className="container position-relative z-1">
        <div className="row align-items-center">
          {showForm && (
            <div className="col-lg-7 pb-5 pb-lg-0">
              <ContactForm />
            </div>
          )}

          <div
            className={`col-lg-5 d-flex flex-column ${
              showForm ? "ps-lg-8" : "mx-auto"
            }`}
          >
            {contactInfo.map((item) => (
              <ContactInfoItem key={item.id} item={item} />
            ))}

            {/* Social Media Links - Additional Contact Option */}
            <div className="mt-4 pt-3 border-top">
              <h6 className="text-primary-2 mb-3">Follow Us</h6>
              <div className="d-flex gap-3">
                <Link
                  href="https://www.facebook.com/ahmed.fouad.658699/"
                  className="icon-shape icon-md border border-1 rounded-3 bg-3 d-flex align-items-center justify-content-center"
                >
                  <i className="ri-facebook-fill text-primary-2" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/ahmed-fouad-b4b9b51a6/"
                  className="icon-shape icon-md border border-1 rounded-3 bg-3 d-flex align-items-center justify-content-center"
                >
                  <i className="ri-linkedin-fill text-primary-2" />
                </Link>
                <Link
                  href="https://github.com/ahmedfouad01099"
                  className="icon-shape icon-md border border-1 rounded-3 bg-3 d-flex align-items-center justify-content-center"
                >
                  <i className="ri-github-fill text-primary-2" />
                </Link>
                <Link
                  href="http://twitter.com"
                  className="icon-shape icon-md border border-1 rounded-3 bg-3 d-flex align-items-center justify-content-center"
                >
                  <i className="ri-twitter-x-fill text-primary-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Utility function to validate email
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Utility function to format phone number
export const formatPhoneNumber = (phone: string): string => {
  // Basic phone formatting - customize as needed
  const cleaned = phone.replace(/\D/g, "");
  if (cleaned.length === 10) {
    return `+1-${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(
      6
    )}`;
  }
  return phone;
};

// Hook for contact form
export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const updateFormData = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
  };

  return { formData, updateFormData, resetForm };
};
