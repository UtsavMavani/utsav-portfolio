"use client";

import Button from "@/components/general/button";

const Download = ({ title, fileName }: { title: string; fileName: string }) => {
  return (
    <Button onClick={() => window?.open(`/files/${fileName}`, "_blank")}>
      Download {title}
    </Button>
  );
};

export default Download;
