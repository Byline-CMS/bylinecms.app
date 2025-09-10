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

import type { Meta, StoryObj } from '@storybook/react-vite'

import { EventPager } from './event-pager.js'

const meta: Meta<typeof EventPager> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Pager',
  component: EventPager,
}

export default meta

const DefaultPager = (): React.JSX.Element => {
  const [page, setPage] = React.useState(1)

  const handlePageChange = (_event: any, number: number): void => {
    setPage(number)
  }

  return (
    <>
      <style>
        {`
        .event-pager {
          margin-bottom: 1rem;
        }
      `}
      </style>
      <div style={{ marginBottom: '2rem', maxWidth: '600px' }}>
        <p style={{ marginBottom: '1rem' }}>Stateful Pagers: Current page: {page}</p>
        <EventPager
          page={page}
          count={24}
          className="event-pager"
          onChange={handlePageChange}
          showFirstButton
          showLastButton
          componentName="pager1"
          aria-label="Pager 1"
        />
        <EventPager
          page={page}
          count={24}
          className="event-pager"
          onChange={handlePageChange}
          componentName="pager2"
          aria-label="Pager 2"
        />
        <EventPager
          page={page}
          count={24}
          className="event-pager"
          onChange={handlePageChange}
          componentName="pager3"
          hideNextButton
          hidePrevButton
          aria-label="Pager 3"
        />
      </div>
    </>
  )
}

const ClassicPager = (): React.JSX.Element => {
  const [page, setPage] = React.useState(1)

  const handlePageChange = (_event: any, number: number): void => {
    setPage(number)
  }

  return (
    <>
      <style>
        {`
        .event-pager {
          margin-bottom: 1rem;
        }
      `}
      </style>
      <div style={{ marginBottom: '2rem', maxWidth: '600px' }}>
        <p style={{ marginBottom: '1rem' }}>Stateful Pagers: Current page: {page}</p>
        <EventPager
          variant="classic"
          className="event-pager"
          page={page}
          count={24}
          onChange={handlePageChange}
          showFirstButton
          showLastButton
          componentName="pager1"
          aria-label="Pager 1"
        />
        <EventPager
          variant="classic"
          className="event-pager"
          page={page}
          count={24}
          onChange={handlePageChange}
          componentName="pager2"
          aria-label="Pager 2"
        />
        <EventPager
          variant="classic"
          className="event-pager"
          page={page}
          count={24}
          onChange={handlePageChange}
          componentName="pager3"
          hideNextButton
          hidePrevButton
          aria-label="Pager 3"
        />
      </div>
    </>
  )
}

const DashboardPager = (): React.JSX.Element => {
  const [page, setPage] = React.useState(1)

  const handlePageChange = (_event: any, number: number): void => {
    setPage(number)
  }

  return (
    <>
      <style>
        {`
        .event-pager {
          margin-bottom: 1rem;
        }
      `}
      </style>
      <div style={{ marginBottom: '2rem', maxWidth: '600px' }}>
        <p style={{ marginBottom: '1rem' }}>Stateful Pagers: Current page: {page}</p>
        <EventPager
          variant="dashboard"
          className="event-pager"
          page={page}
          count={24}
          onChange={handlePageChange}
          showFirstButton
          showLastButton
          componentName="pager1"
          aria-label="Pager 1"
        />
        <EventPager
          variant="dashboard"
          className="event-pager"
          page={page}
          count={24}
          onChange={handlePageChange}
          componentName="pager2"
          aria-label="Pager 2"
        />
        <EventPager
          variant="dashboard"
          className="event-pager"
          page={page}
          count={24}
          onChange={handlePageChange}
          componentName="pager3"
          hideNextButton
          hidePrevButton
          aria-label="Pager 3"
        />
      </div>
    </>
  )
}

type Story = StoryObj<typeof EventPager>

export const Default: Story = {
  render: () => <DefaultPager />,
}

export const Classic: Story = {
  render: () => <ClassicPager />,
}

export const Dashboard: Story = {
  render: () => <DashboardPager />,
}
