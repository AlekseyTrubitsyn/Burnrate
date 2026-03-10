import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Burnrate | Next.js Enterprise Boilerplate",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://next-enterprise.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png",
      },
    ],
  },
}

export default function Web() {
  return (
    <>
      <section className="flex min-h-screen items-center justify-center bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-(--breakpoint-xl) px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-6 max-w-2xl text-4xl leading-none font-extrabold tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              Burnrate
            </h1>
            <p className="mb-2 max-w-2xl font-light text-gray-500 md:text-lg lg:text-xl dark:text-gray-400">
              A tech sandbox webapp disguised as a personal finance tracker
            </p>
            <p className="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
              Built to explore new tools, patterns, and ideas
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
