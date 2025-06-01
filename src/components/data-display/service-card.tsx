import Image from "next/image";
import { ServiceCard as ServiceCardProps } from "@/lib/types";

const ServiceCard = ({ logo, label }: ServiceCardProps) => {
  return (
    <div className="cursor-pointer transition-all duration-700 ease-in-out hover:-translate-y-5">
      <div className="w-full sm:w-[250px]">
        <div className="green-pink-gradient shadow-card w-full rounded-[20px] p-[1px]">
          <div className="bg-tertiary flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] px-10 py-5">
            <Image
              src={logo}
              alt={label}
              className="h-[60px] w-[60px]"
            />
            <h3 className="text-center text-[20px] font-bold text-white">
              {label}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
