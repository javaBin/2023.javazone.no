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
  render: (args) => <Title type={args.type}>{args.children}</Title>,
  args: {
    type: 'h1',
    children: 'H1 title',
  },
}

export const H2: Story = {
  render: (args) => <Title type={args.type}>{args.children}</Title>,
  args: {
    type: 'h2',
    children: 'H2 title',
  },
}

export const H3: Story = {
  render: (args) => <Title type={args.type}>{args.children}</Title>,
  args: {
    type: 'h3',
    children: 'H3 title',
  },
}
