import Image from "next/image";
import Link from "next/link";
import me from "../../../public/me.png";

export default function HomePage() {
  return (
    <main className="grid lg:grid-cols-2 h-[85vh] items-center justify-between">
      <div>
        <h4 className="text-4xl font-light tracking-wider">Hello there! 👋</h4>
        <h4 className="mt-24 mb-20 text-4xl font-light tracking-wider leading-tight">
          I&apos;m <span className="font-semibold">Fajar Fathurrahman</span>,
          <br /> a design-minded front-end software enginee focused on building
          beautiful interfaces & experiences.
        </h4>

        <div className="flex items-center gap-4">
          <span className="font-light text-2xl">Get in touch 👉</span>
          <Link href="mailto:fajarfathurrahmanramdhani@gmail.com" target="_blank" className="font-normal decoration-blue-500 text-2xl underline underline-offset-4">
            fajarfathurrahmanramdhani@gmail.com
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-end">
        <Image
          src={me}
          alt="Fajar Fathurrahman"
          width={400}
          height={400}
          quality={100}
          priority
        />
      </div>
    </main>
  );
}
