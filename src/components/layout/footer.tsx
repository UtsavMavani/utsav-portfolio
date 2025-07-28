import { Copyright } from "lucide-react";

import Typography from "@/components/general/typography";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 py-5">
      <div className="flex items-center justify-center gap-1">
        <Typography className="flex items-center" variant="body3">
          <Copyright className="mr-1 inline-block h-4 w-4" />
          {new Date().getFullYear()} |&nbsp; Developed
          &nbsp;with ❤️️ by Utsav Mavani
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
