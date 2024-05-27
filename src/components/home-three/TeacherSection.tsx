import React from "react";
import YellowBg from "../../../public/assets/img/shape/yellow-bg-2.png";
import Image from "next/image";
import Link from "next/link";
import instructor_data from "@/data/instructor-data";

const TeacherSection = () => {
  return (
    <section className="teacher__area pt-115 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 offset-xxl-3">
            <div className="section__title-wrapper text-center mb-60">
              <h2 className="section__title">
                Our Most <br />
                Popular{" "}
                <span className="yellow-bg">
                  {" "}
                  Teachers{" "}
                  <Image
                    src={YellowBg}
                    style={{ width: "auto", height: "auto" }}
                    alt="img not found"
                  />{" "}
                </span>{" "}
                <br />
              </h2>
              <p>
                You {`don't`} have to struggle alone, {`you've`} got our
                assistance and help.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {instructor_data.slice(0, 3).map((item) => (
            <div key={item.id} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="teacher__item text-center grey-bg-5 transition-3 mb-30">
                <div className="teacher__thumb w-img fix">
                  <Link href={`/instructor-details/${item.id}`}>
                    <Image
                      src={item.image}
                      style={{ width: "100%", height: "auto" }}
                      alt="img not found"
                    />
                  </Link>
                </div>
                <div className="teacher__content">
                  <h3 className="teacher__title">
                    <Link href={`/instructor-details/${item.id}`}>
                      {item.title}
                    </Link>
                  </h3>
                  <span> {item.category} </span>

                  <div className="teacher__social">
                    <ul>
                      {item?.socialIcon?.map((item: any) => (
                        <li key={item.id}>
                          <Link href={item.link}>
                            {" "}
                            <i className={item.icon}></i>{" "}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-xxl-12">
            <div className="teacher__more text-center mt-30">
              <Link
                href="/contact"
                className="e-btn-ins edu-btn-border-ins e-btn-5"
              >
                Become an Instructor
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherSection;
