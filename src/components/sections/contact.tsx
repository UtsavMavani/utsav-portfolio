"use client";

import { useState } from "react";
import { Copy, Mail, Phone } from "lucide-react";

import SocialIcons from "@/components/data-display/social-icons";
import Tag from "@/components/data-display/tag";
import IconButton from "@/components/general/icon-button";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import useWindowSize from "@/hooks/use-window-size";
import { copyTextToClipboard } from "@/lib/utils";
import Link from "next/link";

let email = "utsavmavani000@gmail.com";
let phone = "+91 93133 94686";

type CopyValue = "email" | "phone";

const ContactSection = () => {
  const { width } = useWindowSize();
  const [isCopied, setIsCopied] = useState(false);
  const [copiedValueType, setCopiedValueType] = useState<CopyValue | null>(
    null
  );

  const handleCopyClick = async (text: string, type: CopyValue) => {
    try {
      await copyTextToClipboard(text);
      setIsCopied(true);
      setCopiedValueType(type);
      let timoutId: any = setTimeout(() => {
        setIsCopied(false);
        setCopiedValueType(null);
        clearTimeout(timoutId);
      }, 1500);
    } catch (error) {
      setIsCopied(false);
      setCopiedValueType(null);
      alert("Unable to copy!");
    }
  };

  return (
    <Container id="contact">
      <div>
        <p className="section-subtitle">Get In Touch</p>
        <h2 className="section-title">Contact.</h2>
      </div>

      <div className="mt-10 flex flex-col items-center gap-6 md:gap-10">
        <div className="flex flex-col items-center md:gap-5">
          <div className="flex items-center gap-3 md:gap-5">
            <Mail className="h-6 w-6 md:h-8 md:w-8" />
            <Link href={`mailto:${email}`}>
              <Typography variant="h3">{email}</Typography>
            </Link>

            <IconButton
              size={width && width < 768 ? "md" : "lg"}
              onClick={() => handleCopyClick(email, "email")}
              showTooltip={isCopied && copiedValueType === "email"}
              tooltipText="Copied!"
            >
              <Copy />
            </IconButton>
          </div>
          <div className="flex items-center gap-3 md:gap-5">
            <Phone className="h-6 w-6 md:h-8 md:w-8" />
            <Link href={`tel:${phone.replace(" ", "")}`}>
              <Typography variant="h3">{phone}</Typography>
            </Link>

            <IconButton
              size={width && width < 768 ? "md" : "lg"}
              onClick={() => handleCopyClick(phone.replace(" ", ""), "phone")}
              showTooltip={isCopied && copiedValueType === "phone"}
              tooltipText="Copied!"
            >
              <Copy />
            </IconButton>
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-3">
          <Typography className="text-center">
            You may also find me on these platforms!
          </Typography>
          <SocialIcons />
        </div>
      </div>
    </Container>
  );
};

export default ContactSection;
