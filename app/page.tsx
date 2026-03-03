import { ArrowUpRight } from "akar-icons"

import Image from "next/image"
import type * as React from "react"
import ProfileImage from "@/public/profile.jpeg"
import classNames from "@/utils/classNames"
import { getMetadata } from "@/utils/metadata"

export const metadata = getMetadata({
  path: "/",
  title: "Rajarshi Gupta",
  description: "Rajarshi Gupta's Personal Website",
})

const Home: React.FC = () => {
  return (
    <main className="flex min-h-dvh flex-col justify-center">
      <div className="px-4 md:mx-auto md:w-[480px] md:px-0">
        <div className="mb-6 flex items-start justify-between">
          <Image
            src={ProfileImage}
            alt="Rajarshi Gupta"
            className="w-20 -rotate-3 rounded-md"
          />
        </div>
        <h1 className="mb-12 font-semibold text-stone-700 text-xl tracking-tighter md:text-2xl">
          <span className="mb-6 flex">Hi, I’m Rajarshi Gupta.</span>A Product
          Manager passionate about solving complex problems to drive growth.
          Specializing in product strategy and user-centered design.
          <br />
          <br />I partner with founders to turn ambitious ideas into scalable
          products, leveraging deep user insights to create experiences that
          resonate and deliver impact.
        </h1>
      </div>
      <div className="px-4 md:mx-auto md:w-[480px] md:px-0">
        <p className="justify-baseline mb-5 flex gap-6 font-semibold text-lg tracking-tighter md:text-xl">
          <a
            href="https://cal.com/rajarshi/15min"
            target="_blank"
            className={classNames(
              "relative flex items-center gap-1 text-stone-700 outline-hidden transition-colors hover:text-stone-900 focus:text-stone-900",
              "after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-stone-600 after:transition-all after:duration-500 hover:after:w-full focus:after:w-full"
            )}
            rel="noopener"
          >
            <span>Schedule Call</span>
            <ArrowUpRight size={19} />
          </a>
          <a
            href="https://x.com/rajarshikgupta"
            target="_blank"
            className={classNames(
              "relative ml-auto flex items-center gap-1 text-stone-700 outline-hidden transition-colors hover:text-stone-900 focus:text-stone-900",
              "after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-stone-600 after:transition-all after:duration-500 hover:after:w-full focus:after:w-full"
            )}
            rel="noopener"
          >
            <span>Twitter</span>
            <ArrowUpRight size={19} />
          </a>
          <a
            href="https://www.linkedin.com/in/rajarshikgupta/"
            target="_blank"
            className={classNames(
              "relative flex items-center gap-1 text-stone-700 outline-hidden transition-colors hover:text-stone-900 focus:text-stone-900",
              "after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-stone-600 after:transition-all after:duration-500 hover:after:w-full focus:after:w-full"
            )}
            rel="noopener"
          >
            <span>LinkedIn</span>
            <ArrowUpRight size={19} />
          </a>
        </p>
      </div>
    </main>
  )
}

export default Home
