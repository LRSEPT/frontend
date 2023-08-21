import React from "react"
import HomePage from "./HomePage"
import Head from "next/head"

export default function Home() {
  return (
      <div className="root">
        <Head>
          <title>Loris Blog</title>
          <link rel="icon" href="/favicon.ico"/>
        </Head>
        <HomePage />
      </div>
  )
}
