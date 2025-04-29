import Image from "next/image";
import { logo } from "./assets/export";

export default function Home() {
  return (
    <div className=" flex justify-center  flex-col items-center justify-items-center min-h-screen px-8 pb-20 gap-16 sm:px-20 font-[family-name:var(--font-geist-sans)] bg-white">
      <Image
        src={logo}
        alt="Logo"
        width={120}
        height={120}
        className="mt-8"
      />

      <h1 className="text-center text-4xl sm:text-6xl font-bold leading-snug">
        <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-transparent bg-clip-text">
          Landing Page
        </span>
        <br />
        <span className="bg-gradient-to-r from-purple-500 via-blue-400 to-green-400 text-transparent bg-clip-text animate-pulse">
          Coming Soon
        </span>
      </h1>

      <div />
    </div>
  );
}
