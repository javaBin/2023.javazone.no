import type { Meta, StoryObj } from '@storybook/react'
import '../../styles/globals.css'

import { BackgroundSection } from '../../components/BackgroundSection'
import { Title } from '@/components/title/Title'
import { Section } from '@/components/section/Section'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// @ts-ignore
const meta = {
  title: 'Components/BackgroundSection',
  component: BackgroundSection,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof BackgroundSection>

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const About: Story = {
  render: (args) => (
    <>
      <Section>
        <Title>Normal Section</Title>
      </Section>
      <Section>
        <Title>Normal Section</Title>
      </Section>
      <Section>
        <Title>Normal Section</Title>
      </Section>
      <Section>
        <Title>Normal Section</Title>
      </Section>
      <BackgroundSection {...args} />
      <Section>
        <Title>Normal Section</Title>
      </Section>
    </>
  ),
  args: {
    type: 'about',
  },
}
