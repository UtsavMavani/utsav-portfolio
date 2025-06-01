import { TechDetails as TechDetailsProps } from "@/lib/types";
import ImageWrapper from "@/components/data-display/image-wrapper";

const TechDetails = ({ logo, darkModeLogo, label }: TechDetailsProps) => {
  return (
    <div className="flex w-[100px] cursor-pointer flex-col items-center gap-2 p-4 transition-transform duration-300 md:hover:scale-110">
      <ImageWrapper
        src={logo}
        srcForDarkMode={darkModeLogo}
        alt={label}
        className="h-[50px] w-[50px] object-contain"
      />
      <p>{label}</p>
    </div>
  );
};

export default TechDetails;
