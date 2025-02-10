import * as React from "react"

import type { Viewport } from "next"
import { Mona_Sans } from "next/font/google"
import { ViewTransitions } from "next-view-transitions"

import classNames from "@/utils/classNames"
import { renderSchemaTags } from "@/utils/schema"

import "../styles/main.css"

const sansFont = Mona_Sans({
  variable: "--sans-font",
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
      <html lang="en" className={classNames(sansFont.variable)}>
        <head>{renderSchemaTags()}</head>

        <body className="overflow-x-hidden bg-stone-50 font-sans">
          {children}
        </body>
      </html>
    </ViewTransitions>
  )
}

export default RootLayout
