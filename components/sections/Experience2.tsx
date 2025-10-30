import Link from "next/link";

interface ExperienceItem {
  id: number;
  company: string;
  logo: string;
  period: string;
  href: string;
}

interface SkillItem {
  id: number;
  name: string;
  href: string;
}

interface ResponsibilityItem {
  id: number;
  text: string;
}

export default function Experience2() {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      company: "Google",
      logo: "assets/imgs/home-page-2/experience/google.svg",
      period: "2018 - Present",
      href: "#",
    },
    {
      id: 2,
      company: "Twitter (X)",
      logo: "assets/imgs/home-page-2/experience/twitter.svg",
      period: "2012 - 2015",
      href: "#",
    },
    {
      id: 3,
      company: "Amazon",
      logo: "assets/imgs/home-page-2/experience/amazon.svg",
      period: "2018 - Present",
      href: "#",
    },
    {
      id: 4,
      company: "PayPal",
      logo: "assets/imgs/home-page-2/experience/payPal.svg",
      period: "2010 - 2012",
      href: "#",
    },
  ];

  const skills: SkillItem[] = [
    { id: 1, name: "Python", href: "#" },
    { id: 2, name: "TensorFlow", href: "#" },
    { id: 3, name: "Angular", href: "#" },
    { id: 4, name: "Kubernetes", href: "#" },
    { id: 5, name: "GCP", href: "#" },
  ];

  const responsibilities: ResponsibilityItem[] = [
    {
      id: 1,
      text: "Led development of scalable web applications, <span class='text-secondary-2'>improving performance</span> and user experience for millions of users.",
    },
    {
      id: 2,
      text: "Implemented machine learning algorithms to enhance search functionality.",
    },
    {
      id: 3,
      text: "Collaborated with cross-functional teams to integrate new features seamlessly.",
    },
  ];

  const ExperienceLink = ({ experience }: { experience: ExperienceItem }) => (
    <Link
      href={experience.href}
      className="technology border border-1 rounded-3 p-3"
    >
      <div className="d-flex align-items-center gap-2">
        <img src={experience.logo} alt={experience.company} />
        <div className="d-flex flex-column ms-2">
          <h5 className="mb-1">{experience.company}</h5>
          <span className="text-300">{experience.period}</span>
        </div>
      </div>
    </Link>
  );

  const SkillLink = ({ skill }: { skill: SkillItem }) => (
    <Link href={skill.href} className="text-300 border border-1 px-3 py-1">
      {skill.name}
    </Link>
  );

  const ResponsibilityItem = ({
    responsibility,
  }: {
    responsibility: ResponsibilityItem;
  }) => (
    <li
      className="text-dark mb-3"
      dangerouslySetInnerHTML={{ __html: responsibility.text }}
    />
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
                  +12
                  <span className="text-300">years of </span>
                  passion
                  <span className="text-300">
                    for <br />
                    programming techniques
                  </span>
                </h3>
                <div className="row mt-5">
                  <div className="col-lg-4">
                    <div className="d-flex flex-column gap-2">
                      {experiences.map((experience) => (
                        <ExperienceLink
                          key={experience.id}
                          experience={experience}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="col-lg-8 ps-lg-5 mt-5 mt-lg-0">
                    <h6 className="text-linear-4">Senior Software Engineer</h6>
                    <ul className="mt-4">
                      {responsibilities.map((responsibility) => (
                        <ResponsibilityItem
                          key={responsibility.id}
                          responsibility={responsibility}
                        />
                      ))}
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
