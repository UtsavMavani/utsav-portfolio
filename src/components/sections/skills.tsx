import { TECHNOLOGIES } from "@/lib/data";
import TechDetails from "@/components/data-display/tech-details";
import Container from "@/components/layout/container";

const SkillsSection = () => {
  return (
    <Container id="skills">
      <div>
        <p className="section-subtitle">I use this</p>
        <h2 className="section-title">Technology.</h2>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-10">
        {TECHNOLOGIES.map((technology, index) => (
          <TechDetails {...technology} key={index} />
        ))}
      </div>
    </Container>
  );
};

export default SkillsSection;
