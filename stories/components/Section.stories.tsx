import '../../styles/globals.css'
import type { Meta, StoryObj } from '@storybook/react'

import { Section } from '../../components/section/Section'
import { Title } from '@/components/title/Title'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// @ts-ignore
const meta = {
  title: 'Components/Section',
  component: Section,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Section>

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const NormalSection: Story = {
  render: (args) => (
    <Section {...args}>
      <Title>Normal Section</Title>
      <Title>Normal Section</Title>
      <Title>Normal Section</Title>
      <Title>Normal Section</Title>
    </Section>
  ),
  args: {
    type: 'normal',
  },
}
