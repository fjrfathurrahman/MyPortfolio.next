"use client";
import Image from "next/image";
import Link from "next/link";
import me from "../../public/profile.png";

const Hero = () => {
  return (
    <main className="grid lg:grid-cols-2 md:h-[90vh] items-center justify-between py-20">
      <div>
        <h4>
          Hello there! <span className="emojiWavingHand" />
        </h4>
        <h4 className="mt-22 mb-20">
          I&apos;m <span className="font-bold">Fajar Fathurrahman</span>,
          <br /> a design-minded front-end software enginee focused on{" "}
          <span>building</span> <span>beautiful</span> interfaces & experiences.{" "}
          <span className="emojiLaptop" />
        </h4>

        <div className="flex items-center flex-wrap gap-4">
          <span className="font-light text-xl sm:text-2xl">
            Get in touch 👉
          </span>
          <Link
            href="mailto:fjr.fthrrhmn25@gmail.com"
            target="_blank"
            className="font-normal decoration-blue-500 text-lg sm:text-2xl underline underline-offset-8"
          >
            fjr.fthrrhmn25@gmail.com
          </Link>
        </div>
      </div>

      <Image
        src={me}
        alt="Fajar Fathurrahman"
        width={400}
        height={400}
        quality={100}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII="
        className="rounded-tr-4xl rounded-bl-4xl hidden lg:block"
        priority
      />
    </main>
  );
};

export default Hero;
