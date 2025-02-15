import * as React from "react"

import Image from "next/image"
import * as motion from "motion/react-client"
import { ArrowUpRight } from "akar-icons"

import { getMetadata } from "@/utils/metadata"

import ProfileImage from "@/public/profile.jpeg"
import classNames from "@/utils/classNames"

export const metadata = getMetadata({
  path: "/",
  title: "Rajarshi Gupta",
  description: "Rajarshi Gupta's Personal Website",
})

const COPY = [
  `I run a web and app development agency,`,
  `helping founders build impactful digital`,
  `experiences. Passionate about products,`,
  `focus on innovation, scaling businesses,`,
  `and supporting founders in their growth journey.`,
  ``,
  `Before starting my agency I used to be a`,
  `Product Manager, building impactful products.`,
]

const Home: React.FC = () => {
  return (
    <main className="min-h-dvh flex flex-col justify-center">
      <div className="md:mx-auto md:w-[480px] px-4 md:px-0">
        <motion.div
          initial={{ opacity: 0, translateY: 10, filter: "blur(10px)" }}
          animate={{ opacity: 1, translateY: 0, filter: "blur(0)" }}
          transition={{ delay: 0, type: "spring" }}
          className="mb-6 flex items-start justify-between"
        >
          <Image
            src={ProfileImage}
            alt="Rajarshi Gupta"
            className="w-20 rounded-md -rotate-3"
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, translateY: 10, filter: "blur(10px)" }}
          animate={{ opacity: 1, translateY: 0, filter: "blur(0)" }}
          transition={{ delay: 0.1, type: "spring" }}
          className="text-xl md:text-2xl font-semibold tracking-tighter text-stone-700 mb-12"
        >
          <span className="flex mb-6">Hi, I’m Rajarshi Gupta.</span>
          {COPY.map((copy, index) =>
            copy ? (
              <motion.span
                initial={{ opacity: 0, translateY: 10, filter: "blur(10px)" }}
                animate={{ opacity: 1, translateY: 0, filter: "blur(0)" }}
                transition={{
                  delay: 0.1 * index,
                  type: "spring",
                  bounce: 0,
                }}
                key={index}
                className="flex"
              >
                {copy}
              </motion.span>
            ) : (
              <div className="h-6" />
            )
          )}
        </motion.h1>
      </div>
      <div className="md:mx-auto md:w-[480px] px-4 md:px-0">
        <motion.p
          initial={{ opacity: 0, translateY: 10, filter: "blur(10px)" }}
          animate={{ opacity: 1, translateY: 0, filter: "blur(0)" }}
          transition={{ delay: 0.7, type: "spring" }}
          className="mb-5 text-lg justify-baseline md:text-xl font-semibold tracking-tighter flex gap-6"
        >
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
        </motion.p>
      </div>
    </main>
  )
}

export default Home
