import * as React from "react"

import Image from "next/image"
import { ArrowUpRight } from "akar-icons"

import { getMetadata } from "@/utils/metadata"
import classNames from "@/utils/classNames"

import ProfileImage from "@/public/profile.jpeg"

export const metadata = getMetadata({
  path: "/",
  title: "Rajarshi Gupta",
  description: "Rajarshi Gupta's Personal Website",
})

const Home: React.FC = () => {
  return (
    <main className="min-h-dvh flex flex-col justify-center">
      <div className="md:mx-auto md:w-[480px] px-4 md:px-0">
        <div className="mb-6 flex items-start justify-between">
          <Image
            src={ProfileImage}
            alt="Rajarshi Gupta"
            className="w-20 rounded-md -rotate-3"
          />
        </div>
        <h1 className="text-xl md:text-2xl font-semibold tracking-tighter text-stone-700 mb-12">
          <span className="flex mb-6">Hi, I’m Rajarshi Gupta.</span>
          I’m a Product Manager passionate about building innovative digital
          experiences that drive real impact. I work closely with founders to
          turn bold ideas into scalable products — from zero to one and beyond.
          <br />
          <br />
          Focused on product strategy, innovation, and growth, I’m here to help
          founders navigate the journey of building, launching, and scaling
          products that matter.
        </h1>
      </div>
      <div className="md:mx-auto md:w-[480px] px-4 md:px-0">
        <p className="mb-5 text-lg justify-baseline md:text-xl font-semibold tracking-tighter flex gap-6">
          <a
            href="https://cal.com/rajarshi/15min"
            target="_blank"
            className={classNames(
              "flex items-center gap-1 text-stone-700 hover:text-stone-900 focus:text-stone-900 transition-colors relative outline-hidden",
              "focus:after:w-full hover:after:w-full after:duration-500 after:transition-all after:absolute after:w-0 after:bg-stone-600 after:h-0.5 after:-bottom-0.5 after:left-0"
            )}
          >
            <span>Schedule Call</span>
            <ArrowUpRight size={19} />
          </a>
          <a
            href="https://x.com/rajarshikgupta"
            target="_blank"
            className={classNames(
              "flex items-center gap-1 ml-auto text-stone-700 hover:text-stone-900 focus:text-stone-900 transition-colors relative outline-hidden",
              "focus:after:w-full hover:after:w-full after:duration-500 after:transition-all after:absolute after:w-0 after:bg-stone-600 after:h-0.5 after:-bottom-0.5 after:left-0"
            )}
          >
            <span>Twitter</span>
            <ArrowUpRight size={19} />
          </a>
          <a
            href="https://www.linkedin.com/in/rajarshikgupta/"
            target="_blank"
            className={classNames(
              "flex items-center gap-1 text-stone-700 hover:text-stone-900 focus:text-stone-900 transition-colors relative outline-hidden",
              "focus:after:w-full hover:after:w-full after:duration-500 after:transition-all after:absolute after:w-0 after:bg-stone-600 after:h-0.5 after:-bottom-0.5 after:left-0"
            )}
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
