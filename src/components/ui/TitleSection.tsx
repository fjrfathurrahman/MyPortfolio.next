import { cn } from "@/lib/utils";
import React from "react";

const TitleSection = ({ title, className }: { title: string; className?: string }) => {
  return (
    <h2 className={`${cn("flex items-center gap-4 h-max font-semibold uppercase text-blue-600 text-xl sm:text-2xl tracking-wider leading-tight", className)}`}>
      <div className="border h-max border-blue-600 w-14" />
      {title}
    </h2>
  );
};

export default TitleSection;
