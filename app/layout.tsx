import * as React from "react"

import type { Viewport } from "next"
import { ViewTransitions } from "next-view-transitions"

import { IBM_Plex_Serif, Mona_Sans, Newsreader } from "next/font/google"

import classNames from "@/utils/classNames"
import { renderSchemaTags } from "@/utils/schema"

import "../styles/main.css"

const sansFont = Mona_Sans({
  variable: "--sans-font",
  subsets: ["latin"],
})

const serifFont = Newsreader({
  variable: "--serif-font",
  weight: ["400", "500"],
  subsets: ["latin"],
})
export const viewport: Viewport = {
  themeColor: "#000000",
}

interface Props {
  children: React.ReactNode
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <ViewTransitions>
      <html
        lang="en"
        className={classNames(sansFont.variable, serifFont.variable)}
      >
        <head>{renderSchemaTags()}</head>

        <body className="overflow-x-hidden bg-zinc-50 dark:bg-zinc-900 font-sans">
          {children}
        </body>
      </html>
    </ViewTransitions>
  )
}

export default RootLayout
