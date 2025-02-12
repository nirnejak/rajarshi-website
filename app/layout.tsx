import * as React from "react"

import type { Viewport } from "next"
import localFont from "next/font/local"
import { ViewTransitions } from "next-view-transitions"

import classNames from "@/utils/classNames"
import { renderSchemaTags } from "@/utils/schema"

import "../styles/main.css"

const sansFont = localFont({
  variable: "--sans-font",
  src: [
    {
      path: "../fonts/Satoshi-Variable.woff2",
      weight: "300 800",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-VariableItalic.woff2",
      weight: "300 800",
      style: "italic",
    },
  ],
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
        <head>
          {renderSchemaTags()}

          <script
            defer
            data-domain="rajarshigupta.com"
            src="https://plausible.io/js/script.js"
          ></script>
        </head>

        <body className="overflow-x-hidden font-sans">{children}</body>
        <div
          className="absolute inset-0 bg-repeat bg-left-top -z-10 opacity-30"
          style={{ backgroundImage: "url('bg.png')", backgroundSize: 45 }}
        />
      </html>
    </ViewTransitions>
  )
}

export default RootLayout
