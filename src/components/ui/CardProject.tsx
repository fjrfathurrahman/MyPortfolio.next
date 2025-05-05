import { ArrowUpRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface PROPS {
  children?: React.ReactNode;
  image?: StaticImageData;
  title?: string;
  extra?: string;
  description?: string;
  url?: string;
  github?: string;
}

const CardProject = (props: PROPS) => {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <Image
        src={props.image?.src || ""}
        alt={props.title || ""}
        width={600}
        height={400}
        quality={100}
        className="mb-2 rounded-t-4xl max-w-full h-auto object-cover"
        blurDataURL={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII="}
        placeholder="blur"
      />
      <div>
        <div className="mb-4">
          <h5 aria-label={props.title}>{props.title}</h5>
          <small className="text-sm">{props.extra}</small>
        </div>
        <p>{props.description}</p>

        <div className="mt-4 flex gap-2 items-center">
          {props.url && <Link href={props.url} target="_blank" className="flex gap-2 items-center bg-black text-white p-2 px-6 rounded-full font-semibold">View <ArrowUpRight size={18} /></Link>}
          {props.github && <Link href={props.github} target="_blank" className="border rounded-full p-2 px-6">Github</Link>}
        </div>
      </div>
    </div>
  );
};

export default CardProject;
