import Image, { StaticImageData } from "next/image";
import React from "react";

interface PROPS {
  children?: React.ReactNode;
  image?: StaticImageData;
  title?: string;
  extra?: string;
  description?: string;
  url?: string;
}

const CardProject = (props: PROPS) => {
  return (
    <div className="flex gap-8">
      <Image
        src={props.image?.src || ""}
        alt={props.title || ""}
        width={1400}
        height={400}
        quality={100}
        className="mb-2 rounded-t-4xl min-w-96 min-h-72 object-cover"
        blurDataURL={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII="}
        placeholder="blur"
      />
      <div>
        <div className="mb-4">
          <h5>{props.title}</h5>
          <small>{props.extra}</small>
        </div>
        <p>{props.description}</p>

        {/* <div className="mt-4 flex gap-4 items-center">
          <Github />
        </div> */}
      </div>
    </div>
  );
};

export default CardProject;
