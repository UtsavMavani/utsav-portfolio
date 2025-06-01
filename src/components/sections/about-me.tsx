import Container from "@/components/layout/container";
import { SERVICES } from "@/lib/data";
import ServiceCard from "../data-display/service-card";

const AboutMeSection = () => {
  return (
    <Container id="about" className="bg-gray-50">
      <div>
        <p className="section-subtitle">Introduction</p>
        <h2 className="section-title">Overview.</h2>
      </div>

      <p className="mt-5 max-w-3xl text-[17px] leading-[30px]">
        I&apos;m a MERN stack developer with 2.5 years of experience in building
        scalable and responsive web applications. Skilled in MongoDB,
        Express.js, React.js, and Node.js, with a strong ability to translate
        complex requirements into technical solutions. Committed to writing
        clean and maintainable code, ensuring application security, performance
        optimization, and continuously improving through the adoption of modern
        web technologies.
      </p>

      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {SERVICES.map((service, index) => (
          <ServiceCard {...service} key={index} />
        ))}
      </div>
    </Container>
  );
};

export default AboutMeSection;
