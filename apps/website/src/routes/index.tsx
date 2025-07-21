/**
 * Byline CMS
 *
 * Copyright © 2025 Anthony Bouch and contributors.
 *
 * This file is part of Byline CMS.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 */

import { Button, Card, Container, Section } from '@byline/uikit/react'
import { createFileRoute, Link } from '@tanstack/react-router'
import {
  ArrowRight,
  Bot,
  Code2,
  Database,
  DiscIcon as Discord,
  ExternalLink,
  Github,
  Mail,
  Moon,
  Sun,
  Twitter,
  Users,
  Zap,
} from 'lucide-react'
import { WYSIWYGAnimation } from '@/ui/components/wysiwyg-animation'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <>
        <Section className="mx-auto flex flex-col items-center justify-center px-6 pt-14 text-center md:pt-22">
        <Container>
          <h1 className="mb-6 text-6xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Byline&nbsp;
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-amber-500 bg-clip-text text-transparent">
             CMS
            </span>
          </h1>
          <p className="mb-12 max-w-2xl text-lg text-gray-900 dark:text-gray-200 sm:text-xl">
            A modern, headless, fast, and AI-first CMS. Build content-driven applications with speed and flexibility.
          </p>
        </Container>
      </Section>
      <Section className="py-8">
        <Container>
          <div className="max-w-4xl mx-auto">
            <WYSIWYGAnimation />
          </div>
        </Container>
      </Section>

      {/* Features Section */}
      <Section className="pt-12 pb-22">
        <Container>
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">Built for Modern Content Platforms</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Everything you need to build content-driven applications with speed and flexibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="pb-4">
              <Card.Header>
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                  <Database className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <Card.Title className="dark:text-white text-2xl">Headless Architecture</Card.Title>
                <Card.Description className="dark:text-gray-300">
                  API-first design that works with any frontend framework or technology stack.
                </Card.Description>
              </Card.Header>
            </Card>

             <Card className="pb-4">
              <Card.Header>
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <Card.Title className="dark:text-white  text-2xl">Lightning Fast</Card.Title>
                <Card.Description className="dark:text-gray-300">
                  Optimized for performance with edge caching and real-time content delivery.
                </Card.Description>
              </Card.Header>
            </Card>

             <Card className="pb-4">
              <Card.Header>
                <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <Card.Title className="dark:text-white  text-2xl">Community Driven</Card.Title>
                <Card.Description className="dark:text-gray-300">
                  Open source project built with community feedback and contributions at its core.
                </Card.Description>
              </Card.Header>
            </Card>
          </div>
        </Container>
      </Section>
      {/* Coming Soon Section */}
      <Section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <Container className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                We're Just Getting Started
              </h2>
              <p className="text-xl text-purple-100">
                Byline CMS is currently in active development. Join our community to stay updated on
                our progress and be the first to try new features.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outlined"
                className="text-lg px-5 py-4 text-white border-white hover:bg-white hover:text-purple-600 bg-transparent"
              >
                Follow Updates
                <Twitter className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
