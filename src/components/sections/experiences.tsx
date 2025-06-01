import { EXPERIENCES } from "@/lib/data";
import ExperienceDetails from "@/components/data-display/experience-details";
import Container from "@/components/layout/container";

const ExperienceSection = () => {
  return (
    <Container id="experience" className="bg-gray-50">
      <div>
        <p className="section-subtitle">My Journey</p>
        <h2 className="section-title">Experience.</h2>
      </div>

      <div className="mt-10 flex flex-col items-center gap-10">
        {EXPERIENCES?.map((experience, index) => (
          <ExperienceDetails {...experience} key={index} />
        ))}
      </div>
    </Container>
  );
};

export default ExperienceSection;
