import * as React from "react"

import Image from "next/image"
import * as motion from "motion/react-client"

import { BASE_TRANSITION } from "@/utils/animation"
import { getMetadata } from "@/utils/metadata"

import ProfileImage from "@/public/profile.jpeg"

export const metadata = getMetadata({
  path: "/",
  title: "Rajarshi Gupta",
  description: "Rajarshi Gupta's Personal Website",
})

const Home: React.FC = () => {
  return (
    <main className="min-h-screen flex flex-col justify-center">
      <div className="mx-auto md:w-[480px] px-4 md:px-0">
        <motion.div
          initial={{ translateY: 20, opacity: 0, filter: `blur(10px)` }}
          animate={{ translateY: 0, opacity: 1, filter: "none" }}
          transition={{ delay: 0, ...BASE_TRANSITION }}
          className="mb-6 flex items-start justify-between"
        >
          <Image
            src={ProfileImage}
            alt="Rajarshi Gupta"
            className="w-20 rounded-md -rotate-3"
          />
        </motion.div>
        <motion.h1
          initial={{ translateY: 20, opacity: 0, filter: `blur(10px)` }}
          animate={{ translateY: 0, opacity: 1, filter: "none" }}
          transition={{ delay: 0.1, ...BASE_TRANSITION }}
          className="text-2xl font-semibold tracking-tighter text-stone-500"
        >
          <span className="flex mb-6">Hi, I’m Rajarshi Gupta.</span>
          <span className="flex mb-6">
            I run a web and app development agency, helping founders build
            impactful digital experiences. Passionate about products, I focus on
            innovation, scaling businesses, and supporting founders in their
            growth journey.
          </span>
          <span className="flex mb-12">
            Before starting my agency I used to be a Product Manager at Open
            Money.
          </span>
        </motion.h1>
      </div>
      <div className="mx-auto md:w-[480px] px-4 md:px-0">
        <motion.p
          initial={{ translateY: 20, opacity: 0, filter: `blur(10px)` }}
          animate={{ translateY: 0, opacity: 1, filter: "none" }}
          transition={{ delay: 0.2, ...BASE_TRANSITION }}
          className="mb-5 text-2xl font-semibold flex gap-5"
        >
          <a
            href="https://x.com/rajarshikgupta"
            target="_blank"
            className="text-stone-500 hover:text-stone-600 focus:text-stone-600 transition-colors"
          >
            Twitter
          </a>
          <a
            href="https://www.linkedin.com/in/rajarshikgupta/"
            target="_blank"
            className="text-stone-500 hover:text-stone-600 focus:text-stone-600 transition-colors"
          >
            LinkedIn
          </a>
        </motion.p>
      </div>
    </main>
  )
}

export default Home
