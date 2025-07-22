'use client'

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

import { Link } from '@tanstack/react-router'
import Logo from '@/images/byline-logo'

export function SiteFooter() {
  return (
    <footer className="bg-gray-950 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-[1.3fr_0.9fr_1fr_0.8fr] gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <Link to="/">
                  <Logo className="w-[32px] h-[32px]" />
                </Link>
              </div>
              <span className="text-xl font-bold">Byline CMS</span>
            </div>
            <p className="text-gray-400">
              Building the future of content management, one commit at a time.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Project</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Byline-CMS/bylinecms.dev"
                  className="hover:text-white transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Byline-CMS/bylinecms.dev"
                  className="hover:text-white transition-colors"
                >
                  Roadmap
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Byline-CMS/bylinecms.dev"
                  className="hover:text-white transition-colors"
                >
                  Contributing
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Byline-CMS/bylinecms.dev"
                  className="hover:text-white transition-colors"
                >
                  Releases
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Byline-CMS/bylinecms.dev/discussions/"
                  className="hover:text-white transition-colors"
                >
                  GitHub Discussions
                </a>
              </li>
              <li>
                <Link to="/" href="#" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/" href="#" className="hover:text-white transition-colors">
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/" href="#" className="hover:text-white transition-colors">
                  API Reference
                </Link>
              </li>
              <li>
                <Link to="/" href="#" className="hover:text-white transition-colors">
                  Examples
                </Link>
              </li>
              <li>
                <Link to="/" href="#" className="hover:text-white transition-colors">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link to="/" href="#" className="hover:text-white transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Anthony Bouch and contributors. Open source and built
            with ❤️ by the community.
          </p>
        </div>
      </div>
    </footer>
  )
}
