interface EducationItem {
  id: number;
  period: string;
  institution: string;
  description: string;
}

interface ResearchItem {
  id: number;
  period: string;
  title: string;
  description: string;
}

export default function Education2() {
  const educationItems: EducationItem[] = [
    {
      id: 1,
      period: "2020-2024:",
      institution: "MIT",
      description: "Bachelor's Degree in Computer Science",
    },
    {
      id: 2,
      period: "2018-2019:",
      institution: "Harvard University",
      description: "Certification in React and Redux, Node.js Developer Course",
    },
    {
      id: 3,
      period: "2015-2016:",
      institution: "Stanford University",
      description: "Certification in Full Stack Web Development",
    },
    {
      id: 4,
      period: "2013-2015:",
      institution: "University of Washington",
      description: "Certification in React and Redux, Node.js Developer Course",
    },
  ];

  const researchItems: ResearchItem[] = [
    {
      id: 1,
      period: "2023-2024:",
      title: "Advanced Data Analytics with Big Data Tools",
      description:
        "Utilized big data tools for advanced analytics and insights.",
    },
    {
      id: 2,
      period: "2021-2013:",
      title: "Cloud-Native Application Architectures",
      description:
        "Studied best practices for designing cloud-native applications.",
    },
    {
      id: 3,
      period: "2019-2020:",
      title: "AI-Driven User Experience Personalization",
      description:
        "Leveraged AI to personalize user experiences based on behavior.",
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
    items: EducationItem[] | ResearchItem[];
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
                title="Researched"
                icon={researchIcon}
                items={researchItems}
                bgClass="bg-3"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
