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

// biome-ignore lint/style/useImportType: <explanation>
import React from 'react'

import { Button } from '../../components/button/button.js'
import { IconButton } from '../../components/button/icon-button.js'
import { CloseIcon } from '../../icons/close-icon.js'

import { Modal, useModal } from './modal.js'

export default {
  title: 'Widgets/Modal',
  component: Modal,
  argTypes: {},
}

export const Default = (): React.JSX.Element => {
  const { onDismiss, onOpen, isOpen, setIsOpen } = useModal()

  const whiteIcon = `
    .white-icon {
      fill: white;  
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
        Open Modal
      </Button>
      <Modal isOpen={isOpen} onDismiss={onDismiss} closeOnOverlayClick={true}>
        <Modal.Container style={{ maxWidth: '600px' }}>
          <Modal.Header>
            <h2>Modal Header</h2>
            <IconButton
              arial-label="Close"
              size="sm"
              onClick={() => {
                setIsOpen(false)
              }}
            >
              <CloseIcon width="16px" height="16px" svgClassName="white-icon" />
            </IconButton>
          </Modal.Header>
          <Modal.Content>
            <p style={{ paddingTop: '1rem' }}>
              Modal content with some text here that should run a little longer. And longer here.
              And the current theme is.
            </p>
          </Modal.Content>
          <Modal.Actions>
            <Button
              size="sm"
              intent="noeffect"
              onClick={() => {
                setIsOpen(false)
              }}
              data-autofocus
            >
              Close
            </Button>
          </Modal.Actions>
        </Modal.Container>
      </Modal>
    </>
  )
}
