import Image from "next/image";
import { MapPin } from "lucide-react";

import UtsavHeadshot from "/public/images/utsav-headshot.jpg";
import SocialIcons from "@/components/data-display/social-icons";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import Download from "@/components/general/download";

const HeroSection = () => {
  return (
    <Container id="hero" className="min-h-screen bg-hero-pattern">
      <div className="flex flex-col gap-12 md:flex-row">
        {/* Image */}
        <div className="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
          <div className="shadow-headshot h-[250px] w-[250px] lg:h-[300px] lg:w-[300px] overflow-hidden rounded-full">
            <Image
              src={UtsavHeadshot}
              alt="Headshot of Utsav"
              className="h-full w-full object-cover object-center"
            ></Image>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-3xl flex-grow flex-col justify-center gap-10 md:order-first md:items-start md:justify-center">
          <div className="flex flex-col gap-2">
            <h1 className="hero-title">Hi, I&apos;m Utsav</h1>
            <h1 className="hero-subtitle">Full Stack Web Developer</h1>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <MapPin className="stroke-gray-600" />
              <Typography>Surat, India</Typography>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                </span>
              </div>
              <Typography>Available for new projects</Typography>
            </div>
          </div>

          <Download title="CV" fileName="utsav-resume.pdf" />

          <SocialIcons />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
