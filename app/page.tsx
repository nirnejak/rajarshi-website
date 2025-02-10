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
        <div className="flex flex-col md:flex-row">
          <div className="flex-1">
            <motion.h1
              initial={{ translateY: 20, opacity: 0, filter: `blur(10px)` }}
              animate={{ translateY: 0, opacity: 1, filter: "none" }}
              transition={{ delay: 0, ...BASE_TRANSITION }}
              className="text-2xl font-semibold tracking-tighter text-stone-500 mb-6"
            >
              Rajarshi Gupta
            </motion.h1>
          </div>
          <div className="flex-1 font-normal tracking-tight text-stone-900 max-w-[50ch]">
            <motion.p
              initial={{ translateY: 20, opacity: 0, filter: `blur(10px)` }}
              animate={{ translateY: 0, opacity: 1, filter: "none" }}
              transition={{ delay: 0, ...BASE_TRANSITION }}
              className="text-sm mb-4 md:text-base"
            >
              Hi, I’m a Product Manager based in Bangalore with a background in
              Electrical & Electronics Engineering. I started as a Software
              Developer at Accenture before moving into product management. I
              also run a web and app development agency, helping founders build
              impactful digital experiences. Passionate about products, I focus
              on innovation, scaling businesses, and supporting founders in
              their growth journey.
            </motion.p>
            <motion.p
              initial={{ translateY: 20, opacity: 0, filter: `blur(10px)` }}
              animate={{ translateY: 0, opacity: 1, filter: "none" }}
              transition={{ delay: 0.1, ...BASE_TRANSITION }}
              className="text-sm mb-16 md:text-base"
            >
              Connect with me on -{" "}
              <a
                href="https://x.com/rajarshikgupta"
                target="_blank"
                className="text-stone-500 hover:text-stone-600 focus:text-stone-600 transition-colors font-medium"
              >
                Twitter
              </a>{" "}
              or{" "}
              <a
                href="https://www.linkedin.com/in/rajarshikgupta/"
                target="_blank"
                className="text-stone-500 hover:text-stone-600 focus:text-stone-600 transition-colors font-medium"
              >
                LinkedIn
              </a>
            </motion.p>
            <motion.div
              initial={{ translateY: 20, opacity: 0, filter: `blur(10px)` }}
              animate={{ translateY: 0, opacity: 1, filter: "none" }}
              transition={{ delay: 0.2, ...BASE_TRANSITION }}
            >
              <Image
                src={DeskImage}
                alt="Rajarshi Gupta's Desk"
                className="grayscale"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
