// /* eslint-disable @next/next/no-Image-element */
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">


        <Image
          className="dark:invert"
          src="/cloud.png"
          alt="Cloud Premises"
          width={180}
          height={38}
        // priority
        />

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <h1
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"


        >
          <Image
            src="/file.svg"
            alt="File icon"
            width='16'
            height='16'
          />
          Cloud Premises
        </h1>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/company/cloud-premises/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image

            src="/window.svg"
            alt="Window icon"
            width='16'
            height='16'
          />
          LinkedIn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/Cloud-Premises"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/globe.svg"
            alt="Globe icon"
            width='16'
            height='16'
          />
          Github →
        </a>
      </footer>
    </div>
  );
}