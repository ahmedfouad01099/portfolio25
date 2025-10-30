"use client";
import { useState } from "react";

interface ExperienceItem {
  id: number;
  company: string;
  logo: string;
  period: string;
  role: string;
  activities: string[];
}

interface SkillItem {
  id: number;
  name: string;
  href: string;
}

export default function Experience2() {
  const [selectedExperience, setSelectedExperience] = useState<number>(0);
  const experiences: ExperienceItem[] = [
    {
      id: 0,
      company: "Depax",
      logo: "assets/imgs/companies/depax.jpg",
      period: "April 2021 - Present",
      role: "React Native Developer",
      activities: [
        "Developed cross-platform mobile applications using React Native, delivering clean and maintainable code for multiple production apps",
        "Led code reviews and implemented testing strategies using Jest and React Native Testing Library to ensure 95%+ code quality",
        "Optimized app performance by 40% through memory management and load time improvements",
        "Integrated RESTful and GraphQL APIs, ensuring seamless data flow between frontend and backend services",
        "Collaborated in Agile sprints with UX/UI designers and product teams to deliver user-centric features",
        "Mentored junior developers and established best practices through documentation and knowledge-sharing sessions",
      ],
    },
    {
      id: 1,
      company: "TheCodeFactory",
      logo: "assets/imgs/companies/thecodefactory.jpeg",
      period: "April 2021 - Present",
      role: "Front-End Developer",
      activities: [
        "Built responsive web applications with modern JavaScript frameworks, focusing on reusable component architecture",
        "Collaborated with cross-functional teams to translate business requirements into technical solutions",
        "Optimized web applications for mobile responsiveness and cross-browser compatibility",
        "Implemented best practices for code maintainability and scalability across multiple projects",
      ],
    },
    {
      id: 2,
      company: "Usedo",
      logo: "assets/imgs/companies/usedo.png",
      period: "April 2021 - August 2023",
      role: "Front-End Developer",
      activities: [
        "Developed the complete frontend for Usedo's e-commerce platform, serving thousands of daily users",
        "Created reusable React components that reduced development time by 30% across multiple features",
        "Ensured seamless cross-platform experience with mobile-first responsive design principles",
        "Worked closely with backend engineers to integrate KNET payment gateway and real-time notifications",
      ],
    },
    {
      id: 3,
      company: "Ventio",
      logo: "assets/imgs/companies/ventio.webp",
      period: "December 2020 - January 2022",
      role: "Front-End Developer",
      activities: [
        "Built scalable UI systems for web applications, achieving zero-downtime deployment and optimal user experience",
        "Developed customer-facing account management portal that automated processes and increased customer inflow by 25%",
        "Enhanced in-house applications to boost team productivity and streamline internal workflows",
        "Conducted comprehensive testing for performance, accessibility, browser compatibility, and security compliance",
        "Managed code quality through PR reviews and collaborated using Git with Azure DevOps pipelines",
      ],
    },
  ];

  const skills: SkillItem[] = [
    { id: 1, name: "React Native", href: "#" },
    { id: 2, name: "JavaScript", href: "#" },
    { id: 3, name: "TypeScript", href: "#" },
    { id: 4, name: "React", href: "#" },
    { id: 5, name: "Node.js", href: "#" },
    { id: 6, name: "MongoDB", href: "#" },
    { id: 7, name: "Express.js", href: "#" },
    { id: 8, name: "Git", href: "#" },
  ];

  const ExperienceLink = ({
    experience,
    isSelected,
    onClick,
  }: {
    experience: ExperienceItem;
    isSelected: boolean;
    onClick: () => void;
  }) => (
    <div
      onClick={onClick}
      className={`technology border border-1 rounded-3 p-3 cursor-pointer ${
        isSelected ? "border-primary-2 bg-primary-soft" : ""
      }`}
      style={{ cursor: "pointer", transition: "all 0.3s ease" }}
    >
      <div className="d-flex align-items-center gap-2">
        <img width={60} src={experience.logo} alt={experience.company} />
        <div className="d-flex flex-column ms-2">
          <h5 className="mb-1">{experience.company}</h5>
          <span className="text-300">{experience.period}</span>
        </div>
      </div>
    </div>
  );

  const SkillLink = ({ skill }: { skill: SkillItem }) => (
    <a href={skill.href} className="text-300 border border-1 px-3 py-1">
      {skill.name}
    </a>
  );

  return (
    <>
      <section id="portfolio" className="section-experience pt-5">
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
                    Experience
                  </span>
                </div>
                <h3>
                  +4
                  <span className="text-300">years of </span>
                  experience
                  <span className="text-300">
                    in <br />
                    mobile & web development
                  </span>
                </h3>
                <div className="row mt-5">
                  <div className="col-lg-4">
                    <div className="d-flex flex-column gap-2">
                      {experiences.map((experience) => (
                        <ExperienceLink
                          key={experience.id}
                          experience={experience}
                          isSelected={selectedExperience === experience.id}
                          onClick={() => setSelectedExperience(experience.id)}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="col-lg-8 ps-lg-5 mt-5 mt-lg-0">
                    <h6 className="text-linear-4">
                      {experiences[selectedExperience].role}
                    </h6>
                    <ul className="mt-4">
                      {experiences[selectedExperience].activities.map(
                        (activity, index) => (
                          <li key={index} className="text-dark mb-3">
                            {activity}
                          </li>
                        )
                      )}
                    </ul>
                    <div className="d-flex flex-wrap align-items-center gap-3 mt-7">
                      {skills.map((skill) => (
                        <SkillLink key={skill.id} skill={skill} />
                      ))}
                    </div>
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
      </section>
    </>
  );
}
