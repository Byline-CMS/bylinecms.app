import cx from 'classnames'
import type React from 'react'

import { useTheme } from '@/ui/theme/theme-provider'

import { Link } from '@tanstack/react-router'
import type { Locale } from '@/i18n/i18n-config'
import LogoWhite from '@/images/byline-typelogo-light'
import LogoBlack from '@/images/byline-typelogo-dark'

export function Branding({
  lng,
  hasScrolled,
  pathName,
}: {
  lng: Locale
  hasScrolled: boolean
  pathName: string
}): React.JSX.Element {
  const { theme } = useTheme()
  const brandingBackground =
    hasScrolled || pathName.length > 3 ? 'bg-transparent' : 'bg-transparent'

  return (
    <div
      className={cx(
        'branding flex items-center pl-2 sm:pl-6 pr-2 sm:pr-12 transition-colors duration-300',
        brandingBackground
      )}
    >
      <div className="w-[110px] sm:w-[120px]">
        <Link  to="/">
          {theme === 'dark' ? (
            <LogoWhite className="w-[110px]" />
          ) : (
            <LogoBlack className="w-[110px]" />
          )}
        </Link>
      </div>
    </div>
  )
}
