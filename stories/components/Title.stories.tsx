import type { Meta, StoryObj } from '@storybook/react'
import '../../styles/globals.css'

import { Title } from '../../components/title/Title'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// @ts-ignore
const meta = {
  title: 'Components/Title',
  component: Title,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Title>

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const H1: Story = {
  args: {
    type: 'h1',
    text: 'Primary title',
  },
}

export const H2: Story = {
  args: {
    type: 'h2',
    text: 'Secondary title',
  },
}

export const H3: Story = {
  args: {
    type: 'h3',
    text: 'text title',
  },
}
