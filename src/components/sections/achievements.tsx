"use client";

import Container from "@/components/layout/container";
import Card from "../layout/card";
import ImageWrapper from "../data-display/image-wrapper";
import Typography from "../general/typography";
import { ACHIEVEMENTS } from "@/lib/data";
import Tag from "../data-display/tag";
import Download from "../general/download";

const { logo, logoAlt, title, summary } = ACHIEVEMENTS;

const AchievementsSection = () => {
  return (
    <Container id="achievements">
      <div>
        <p className="section-subtitle">Achievements</p>
        <h2 className="section-title">Certificates & Awards.</h2>
      </div>

      <Card className="mx-auto mt-10 flex w-full max-w-4xl flex-col items-center gap-4 rounded-xl bg-gray p-8 shadow-md dark:bg-gray-100 dark:shadow-2xl md:gap-8">
        <div className="flex justify-center max-md:order-1 md:w-1/4">
          <ImageWrapper src={logo} alt={logoAlt} className="max-w-[200px]" />
        </div>
        <div className="flex flex-col items-center gap-4 max-md:order-3 md:w-2/4">
          <Typography
            variant="subtitle"
            className="font-semibold text-gray-900"
          >
            {title}
          </Typography>
          <ul className="flex list-disc flex-col gap-2 md:gap-1">
            {summary.map((sentence, index) => (
              <Typography component="li" key={index}>
                {sentence}
              </Typography>
            ))}
          </ul>
        </div>
        <div className="flex justify-center max-md:order-3 md:w-1/4">
          <Download
            title="Certificate"
            fileName="rising-star-certificate.jpg"
          />
        </div>
      </Card>
    </Container>
  );
};

export default AchievementsSection;
