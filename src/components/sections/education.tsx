"use client";

import { EDUCATION } from "@/lib/data";
import Container from "../layout/container";
import ExperienceDetails from "../data-display/experience-details";

const EducationSection = () => {
  return (
    <Container id="experience" className="bg-gray-50">
      <div>
        <p className="section-subtitle">My Learning Path</p>
        <h2 className="section-title">Education.</h2>
      </div>

      <div className="mt-10 flex flex-col items-center gap-10">
        {EDUCATION?.map((experience, index) => (
          <ExperienceDetails {...experience} key={index} />
        ))}
      </div>
    </Container>
  );
};

export default EducationSection;
