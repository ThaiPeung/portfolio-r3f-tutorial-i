import React from "react";

import { skills } from "@/constants";

const AboutPage = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Thai
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>Software Engineer based in Thailand</p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience.</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Work at Bangkok Bank (BBL) more than 2 years as software engineer and internship at PEA for 6 months
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
