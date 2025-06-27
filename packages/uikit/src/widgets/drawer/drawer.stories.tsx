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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import { Button } from '../../components/button/button.js'
import { IconButton } from '../../components/button/icon-button.js'
import { CloseIcon } from '../../icons/close-icon.js'

import { Drawer } from './drawer.js'

export default {
  title: 'Widgets/Drawer',
  component: Drawer,
  argTypes: {},
}

export const Default = (): React.JSX.Element => {
  const [isOpen, setIsOpen] = React.useState(false)

  const whiteIcon = `
    .white-icon {
      fill: white;  
    }

    .dark .white-icon {
      fill: black;
    }
  `

  return (
    <>
      <style>{whiteIcon}</style>
      <Button
        onClick={() => {
          setIsOpen(true)
        }}
      >
        Open Drawer
      </Button>
      <Drawer
        id="first-drawer"
        closeOnOverlayClick={true}
        isOpen={isOpen}
        onDismiss={() => setIsOpen(false)}
      >
        <Drawer.Container aria-hidden={!isOpen}>
          <Drawer.TopActions>
            <button type="button" tabIndex={0} className="sr-only">
              no action
            </button>
            <IconButton
              arial-label="Close"
              size="xs"
              onClick={() => {
                setIsOpen(false)
              }}
            >
              <CloseIcon width="14px" height="14px" svgClassName="white-icon" />
            </IconButton>
          </Drawer.TopActions>
          <Drawer.Header className="flex items-center justify-between mb-4">
            <h2>Drawer Actions Here</h2>
          </Drawer.Header>
          <Drawer.Content>
            <p>Drawer content here...</p>
          </Drawer.Content>
        </Drawer.Container>
      </Drawer>
    </>
  )
}

const whiteIcon = `
.white-icon {
  fill: white;  
}

.dark .white-icon {
  fill: black;
}
`

export const Wide = (): React.JSX.Element => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <style>{whiteIcon}</style>
      <Button
        onClick={() => {
          setIsOpen(true)
        }}
      >
        Open Drawer
      </Button>
      <Drawer
        id="first-drawer"
        closeOnOverlayClick={true}
        isOpen={isOpen}
        width="wide"
        onDismiss={() => setIsOpen(false)}
      >
        <Drawer.Container aria-hidden={!isOpen}>
          <Drawer.TopActions>
            <button type="button" tabIndex={0} className="sr-only">
              no action
            </button>
            <IconButton
              arial-label="Close"
              size="xs"
              onClick={() => {
                setIsOpen(false)
              }}
            >
              <CloseIcon width="14px" height="14px" svgClassName="white-icon" />
            </IconButton>
          </Drawer.TopActions>
          <Drawer.Header className="flex items-center justify-between mb-4">
            <h2>Drawer Actions Here</h2>
          </Drawer.Header>
          <Drawer.Content>
            <p>Drawer content here...</p>
          </Drawer.Content>
        </Drawer.Container>
      </Drawer>
    </>
  )
}

export const Nested = (): React.JSX.Element => {
  const [isOpen1, setIsOpen1] = React.useState(false)
  const [isOpen2, setIsOpen2] = React.useState(false)

  const whiteIcon = `
    .white-icon {
      fill: white;  
    }

    .dark .white-icon {
      fill: black;
    }
  `

  return (
    <>
      <style>{whiteIcon}</style>
      <Button
        onClick={() => {
          setIsOpen1(true)
        }}
      >
        Open Drawer 1
      </Button>
      <Drawer
        id="first-drawer"
        width="medium"
        closeOnOverlayClick={true}
        isOpen={isOpen1}
        onDismiss={() => setIsOpen1(false)}
      >
        <Drawer.Container aria-hidden={!isOpen1}>
          <Drawer.TopActions>
            <button type="button" tabIndex={0} className="sr-only">
              no action
            </button>
            <IconButton
              arial-label="Close"
              size="xs"
              onClick={() => {
                setIsOpen1(false)
              }}
            >
              <CloseIcon width="14px" height="14px" svgClassName="white-icon" />
            </IconButton>
          </Drawer.TopActions>
          <Drawer.Header className="flex items-center justify-between mb-4">
            <h2>Drawer 1</h2>
          </Drawer.Header>
          <Drawer.Content>
            <>
              <p>Drawer 1 actions here...</p>
              <Button
                onClick={() => {
                  setIsOpen2(true)
                }}
              >
                Open Drawer 2
              </Button>
              <Drawer
                id="second-drawer"
                width="medium"
                closeOnOverlayClick={true}
                isOpen={isOpen2}
                onDismiss={() => setIsOpen2(false)}
              >
                <Drawer.Container aria-hidden={!isOpen2}>
                  <Drawer.TopActions>
                    <button type="button" tabIndex={0} className="sr-only">
                      no action
                    </button>
                    <IconButton
                      arial-label="Close"
                      size="xs"
                      onClick={() => {
                        setIsOpen2(false)
                      }}
                    >
                      <CloseIcon width="14px" height="14px" svgClassName="white-icon" />
                    </IconButton>
                  </Drawer.TopActions>
                  <Drawer.Header className="flex items-center justify-between mb-4">
                    <h2>Drawer 2</h2>
                  </Drawer.Header>
                  <Drawer.Content>
                    <p>Drawer content here...</p>
                  </Drawer.Content>
                </Drawer.Container>
              </Drawer>
            </>
          </Drawer.Content>
        </Drawer.Container>
      </Drawer>
    </>
  )
}
