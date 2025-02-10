import * as React from "react"

import Image from "next/image"
import * as motion from "motion/react-client"

import { BASE_TRANSITION } from "@/utils/animation"
import { getMetadata } from "@/utils/metadata"

import DeskImage from "@/public/cover.jpg"

export const metadata = getMetadata({
  path: "/",
  title: "Rajarshi Gupta",
  description: "Rajarshi Gupta's Personal Website",
})

const Home: React.FC = () => {
  return (
    <main className="min-h-screen flex">
      <div className="container my-auto">
        <div className="flex">
          <div className="flex-1">
            <motion.h1
              initial={{ translateY: 20, opacity: 0, filter: `blur(10px)` }}
              animate={{ translateY: 0, opacity: 1, filter: "none" }}
              transition={{ delay: 0, ...BASE_TRANSITION }}
              className="text-3xl font-bold tracking-tighter text-neutral-800 dark:text-neutral-300 mb-6"
            >
              Rajarshi Gupta
            </motion.h1>
          </div>
          <div className="flex-1 text-neutral-600 dark:text-neutral-300 max-w-[50ch]">
            <motion.p
              initial={{ translateY: 20, opacity: 0, filter: `blur(10px)` }}
              animate={{ translateY: 0, opacity: 1, filter: "none" }}
              transition={{ delay: 0, ...BASE_TRANSITION }}
              className="text-sm mb-4 md:text-base"
            >
              Hi. I’m, a Product Manager based in Bangalore. I started my
              journey as an Electrical & Electronics Engineer, then worked as a
              Software Developer at Accenture before transitioning into product
              management.
            </motion.p>
            <motion.p
              initial={{ translateY: 20, opacity: 0, filter: `blur(10px)` }}
              animate={{ translateY: 0, opacity: 1, filter: "none" }}
              transition={{ delay: 0.1, ...BASE_TRANSITION }}
              className="text-sm mb-4 md:text-base"
            >
              I also run a web and app development agency, helping founders
              create a strong first impression with top-notch designs. At my
              core, I’m all about products—exploring new ideas, scaling
              businesses, and supporting founders in their growth journey.
            </motion.p>
            <motion.p
              initial={{ translateY: 20, opacity: 0, filter: `blur(10px)` }}
              animate={{ translateY: 0, opacity: 1, filter: "none" }}
              transition={{ delay: 0.2, ...BASE_TRANSITION }}
              className="text-sm mb-16 md:text-base"
            >
              Connect with me on -{" "}
              <a
                href="https://x.com/rajarshikgupta"
                target="_blank"
                className="font-semibold underline underline-offset-2"
              >
                X
              </a>{" "}
              or{" "}
              <a
                href="https://www.linkedin.com/in/rajarshikgupta/"
                target="_blank"
                className="font-semibold underline underline-offset-2"
              >
                LinkedIn
              </a>
            </motion.p>
            <motion.div
              initial={{ translateY: 20, opacity: 0, filter: `blur(10px)` }}
              animate={{ translateY: 0, opacity: 1, filter: "none" }}
              transition={{ delay: 0.3, ...BASE_TRANSITION }}
            >
              <Image src={DeskImage} alt="Rajarshi Gupta's Desk" />
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
