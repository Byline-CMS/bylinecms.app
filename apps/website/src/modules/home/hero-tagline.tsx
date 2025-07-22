import { Container, Section } from '@byline/uikit/react'

export function HeroTagline() {
  return (
    <Section className="mx-auto flex flex-col items-center justify-center px-6 pt-14 text-center md:pt-22">
      <Container>
        <h1 className="mb-6 text-6xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Byline&nbsp;
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-amber-500 bg-clip-text text-transparent">
            CMS
          </span>
        </h1>
        <p className="mb-12 max-w-2xl text-lg text-gray-900 dark:text-gray-200 sm:text-xl text-balance">
          A modern, headless, fast, and AI-first content management system (CMS) for content-driven
          applications.
        </p>
      </Container>
    </Section>
  )
}
