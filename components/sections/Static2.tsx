"use client";
import CountUp from "react-countup";

interface StatItem {
  id: number;
  icon: string;
  endValue: number;
  text: string;
}

export default function Static2() {
  const stats: StatItem[] = [
    {
      id: 1,
      icon: "ri-shape-line",
      endValue: 5,
      text: "Year Experience",
    },
    {
      id: 2,
      icon: "ri-computer-line",
      endValue: 12,
      text: "Projects Completed",
    },
    {
      id: 3,
      icon: "ri-service-line",
      endValue: 12,
      text: "Satisfied Clients",
    },
    // {
    //   id: 4,
    //   icon: "ri-award-line",
    //   endValue: 18,
    //   text: "Awards Winner",
    // },
  ];

  const StatCard = ({ stat }: { stat: StatItem }) => (
    <div className="col-lg-auto col-md-6 text-center text-lg-start">
      <div className="counter-item-cover counter-item">
        <div className="content mx-auto">
          <i className={`${stat.icon} text-primary-2`} />
          <h2 className="text-300 my-0 fs-50">
            <CountUp
              className="odometer text-dark fw-medium"
              enableScrollSpy={true}
              end={stat.endValue}
            />
            <span className="fs-50 text-300 mb-0">+</span>
          </h2>
          <p className="fs-6 mb-0 text-dark">{stat.text}</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="section-static-1 z-0">
        <div className="container position-relative z-1">
          <div className="bg-3 py-60 border border-1 rounded-3 position-relative overflow-hidden">
            <div className="inner">
              <div className="row align-items-center justify-content-lg-around justify-content-center">
                {stats.map((stat) => (
                  <StatCard key={stat.id} stat={stat} />
                ))}
              </div>
            </div>
            <div
              className="background position-absolute top-0 start-0 w-100 h-100 filter-invert"
              data-background="assets/imgs/home-page-2/static/bg.png"
            />
          </div>
        </div>
      </div>
    </>
  );
}
