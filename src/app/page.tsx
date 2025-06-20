import styles from "@/app/ui/styles/home.module.css";

import Link from "next/link";
import Image from "next/image";
import { lusitana } from "@/app/ui/fonts";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="container mx-auto p-4 relative">
        <div className="bg-white border-2 border-purple-100 rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col justify-center">
            <h1
              className={`${lusitana.className} text-4xl font-bold mb-4 ${styles.text_forest_blues}`}
            >
              Welcome
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              Massa urna magnis dignissim id euismod porttitor vitae etiam
              viverra nunc at adipiscing sit morbi aliquet mauris porttitor
              nisi, senectus pharetra, ac porttitor orci.
            </p>
            <Link
              href="/blog/posts"
              className={`outline-1 outline-offset-2 border-gray-700 text-cyan-700 hover:text-white py-2 px-4 rounded hover:bg-cyan-800 md:w-max ${styles.fit_content}`}
            >
              Go to Blog
            </Link>
          </div>
          <div className="relative flex justify-center items-center">
            <Image
              src={"/woods.jpg"}
              className="hidden rounded-xl md:block z-10"
              alt="bg image"
              width={1000}
              height={760}
            />
            <Image
              src={"/barnimage.jpg"}
              className="block rounded-lg md:hidden"
              alt="mobile image"
              width={560}
              height={620}
            />
          </div>
        </div>
      </div>
      <div
        className={`hidden md:block absolute top-0 right-0 bottom-0 left-2/3 z-0 ${styles.bg_gradient}`}
      ></div>
    </main>
  );
}
