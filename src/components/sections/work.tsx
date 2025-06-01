import { PROJECTS } from "@/lib/data";
import ProjectDetails from "@/components/data-display/project-details";
import Tag from "@/components/data-display/tag";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";

const WorkSection = () => {
  return (
    <Container id="work">
      <div>
        <p className="section-subtitle">Some of My work</p>
        <h2 className="section-title">Projects.</h2>
      </div>

      <div className="mt-10 flex flex-col items-center gap-10">
        {PROJECTS?.map((project, index) => (
          <ProjectDetails
            key={index}
            {...project}
            layoutType={index % 2 === 0 ? "default" : "reverse"}
          />
        ))}
      </div>
    </Container>
  );
};

export default WorkSection;
