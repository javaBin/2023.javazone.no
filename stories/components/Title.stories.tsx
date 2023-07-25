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
export const bigTitle: Story = {
  render: (args) => <Title type={args.type}>{args.children}</Title>,
  args: {
    type: 'big-title',
    children: 'big-title',
  },
}

export const title: Story = {
  render: (args) => <Title type={args.type}>{args.children}</Title>,
  args: {
    type: 'title',
    children: 'title',
  },
}

export const subTitle: Story = {
  render: (args) => <Title type={args.type}>{args.children}</Title>,
  args: {
    type: 'subtitle',
    children: 'subTitle',
  },
}
