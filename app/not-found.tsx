import * as React from "react"

import { Link } from "next-view-transitions"

import { getMetadata } from "@/utils/metadata"

export const metadata = getMetadata({
  path: "/",
  title: "Not Found | Next.js App",
  description: "Page not found on Rajarshi Gupta's Personal Website",
})

const NotFound: React.FC = () => {
  return (
    <main className="container">
      <section className="grid min-h-screen place-content-center">
        <div className="text-center">
          <h1 className="mb-3 text-5xl font-bold tracking-tighter text-stone-800">
            404
          </h1>
          <p className="text-base text-stone-800">
            The page you&apos;re looking for cannot be found. Go{" "}
            <Link
              href="/"
              className="font-semibold hover:underline focus:underline"
            >
              Home
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}

export default NotFound
