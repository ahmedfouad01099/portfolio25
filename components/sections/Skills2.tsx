import Link from "next/link";
import Marquee from "react-fast-marquee";

interface SkillItem {
  id: number;
  name: string;
  icon: string;
  href: string;
}

interface SkillCategory {
  id: number;
  title: string;
  skills: string;
}

export default function Skills2() {
  const marqueeSkills1: SkillItem[] = [
    {
      id: 1,
      name: "NodeJS",
      icon: "assets/imgs/home-page-2/hero-1/icon-4.svg",
      href: "#",
    },
    {
      id: 2,
      name: "NextJS",
      icon: "assets/imgs/home-page-2/hero-1/icon-1.svg",
      href: "#",
    },
    {
      id: 3,
      name: "Firebase",
      icon: "assets/imgs/home-page-2/hero-1/icon-2.svg",
      href: "#",
    },
    {
      id: 4,
      name: "MongoDB",
      icon: "assets/imgs/home-page-2/hero-1/icon-3.svg",
      href: "#",
    },
    {
      id: 5,
      name: "React",
      icon: "assets/imgs/home-page-2/hero-1/icon-6.svg",
      href: "#",
    },
  ];

  const marqueeSkills2: SkillItem[] = [
    {
      id: 1,
      name: "VueJS",
      icon: "assets/imgs/home-page-2/hero-1/icon-7.svg",
      href: "#",
    },
    {
      id: 2,
      name: "Angular",
      icon: "assets/imgs/home-page-2/hero-1/icon-8.svg",
      href: "#",
    },
    {
      id: 3,
      name: "Laravel",
      icon: "assets/imgs/home-page-2/hero-1/icon-9.svg",
      href: "#",
    },
    {
      id: 4,
      name: "Tailwind",
      icon: "assets/imgs/home-page-2/hero-1/icon-5.svg",
      href: "#",
    },
  ];

  const skillCategories: SkillCategory[] = [
    {
      id: 1,
      title: "Front-End:",
      skills: "HTML, CSS, JavaScript, React, Angular",
    },
    {
      id: 2,
      title: "Back-End:",
      skills: "Node.js, Express, Python, Django",
    },
    {
      id: 3,
      title: "Databases:",
      skills: "MySQL, PostgreSQL, MongoDB",
    },
    {
      id: 4,
      title: "Tools & Platforms:",
      skills: "Git, Docker, AWS, Heroku",
    },
    {
      id: 5,
      title: "Others:",
      skills: "RESTful APIs, GraphQL, Agile Methodologies",
    },
  ];

  const SkillMarquee = ({
    skills,
    direction = "left",
  }: {
    skills: SkillItem[];
    direction?: "left" | "right";
  }) => (
    <Marquee
      className={`carouselTicker carouselTicker-${direction} position-relative z-1`}
      direction={direction}
    >
      <ul className="carouselTicker__list m-0">
        {skills.map((skill) => (
          <li key={skill.id} className="carouselTicker__item mt-6">
            <Link
              href={skill.href}
              className="brand-logo icon_80 icon-shape rounded-3"
            >
              <img src={skill.icon} alt={skill.name} />
            </Link>
            <span className="tool-tip">{skill.name}</span>
          </li>
        ))}
      </ul>
    </Marquee>
  );

  const SkillCategoryItem = ({ category }: { category: SkillCategory }) => (
    <li className="mb-3">
      <div className="d-flex flex-column flex-md-row gap-2">
        <p className="text-dark text-nowrap mb-0">{category.title}</p>
        <span className="text-300">{category.skills}</span>
      </div>
    </li>
  );

  return (
    <>
      <section id="skills" className="section-skills-2 pt-5">
        <div className="container">
          <div className="rounded-3 bg-3 border border-1 position-relative overflow-hidden">
            <div className="position-relative z-1 py-60">
              <div className="position-relative z-1">
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
                      Projects
                    </span>
                  </div>
                  <h3>My Skills</h3>
                </div>
                <div className="container mt-8">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="row">
                        <div className="col-lg-10 col-md-9 mx-auto overflow-hidden">
                          <SkillMarquee
                            skills={marqueeSkills1}
                            direction="right"
                          />
                        </div>
                        <div className="col-lg-8 col-md-7 col-10 mx-auto overflow-hidden">
                          <SkillMarquee
                            skills={marqueeSkills2}
                            direction="left"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 border-start-md mt-lg-0 mt-5">
                      <div className="row">
                        <div className="col-md-10 mx-auto">
                          <div className="h-100 position-relative">
                            <ul className="ps-3 d-flex flex-column justify-content-between h-100 position-relative">
                              {skillCategories.map((category) => (
                                <SkillCategoryItem
                                  key={category.id}
                                  category={category}
                                />
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="position-absolute d-none d-md-block decorate">
              <div className="rotateme">
                <div className="circle-1-1" />
                <div className="circle-1-2 position-absolute top-50 start-50 translate-middle">
                  <svg
                    className="mb-5 position-absolute bottom-0 start-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width={9}
                    height={9}
                    viewBox="0 0 9 9"
                    fill="none"
                  >
                    <circle cx="4.5" cy="4.5" r="4.5" fill="#636366" />
                  </svg>
                </div>
                <div className="circle-1-3 position-absolute top-50 start-50 translate-middle ">
                  <svg
                    className="mb-3 position-absolute bottom-0 end-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width={9}
                    height={9}
                    viewBox="0 0 9 9"
                    fill="none"
                  >
                    <circle cx="4.5" cy="4.5" r="4.5" fill="#636366" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
