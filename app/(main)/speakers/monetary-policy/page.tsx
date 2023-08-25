import React from 'react'
import { Metadata } from 'next'
import { Section } from '@/components/section/Section'
import { Title } from '@/components/title/Title'
import { Link } from '@/components/link/Link'

export const metadata: Metadata = {
  title: 'JavaZone 2023 - Monetary Policy',
}

export default function MonetaryPolicyPage() {
  return (
    <Section>
      <Title className="leading-tight">Monetary policy</Title>

      <Section>
        <Title type="subtitle">What & How</Title>
        <p className="mb-4">
          If your presentation or a workshop is accepted, you may apply for a refund for travel and
          accommodation. Read below to find out if you are eligible.
        </p>
        <p className="mb-4">
          Applications for speaker reimbursements{' '}
          <strong>
            <em>must</em>
          </strong>{' '}
          be submitted before the August 1st, 2023.
        </p>
      </Section>

      <Section>
        <Title type="subtitle">How to Apply</Title>
        <p className="mb-4">
          The first thing to note is that you need to{' '}
          <strong>
            <em>apply</em>
          </strong>{' '}
          for reminbursement of costs. This is necessary for our budget planning. If you require
          financial support, please reach out to{' '}
          <Link href="mailto:refund@java.no">refund@java.no</Link> after your session or workshop
          was accepted.
        </p>
        <p className="mb-4">
          In this mail, provide an estimate of your travel expenses and the days you will be
          visiting Oslo during the conference.
        </p>
        <p className="mb-4">
          We have a deal with a hotel, so if you need accomondation, we will reserve a room for you.
          Please state in your application which days you are planning to stay. We do not refund
          travel costs above the cost of a reasonably priced economy ticket.
        </p>
        <p className="mb-4">
          Please also note that we do not refund travel expenses for those holding lightning talks.
          However, speakers (including the ones holding lightning talks) will receive a free
          conference ticket.
        </p>
      </Section>

      <Section>
        <Title type="subtitle">Confirmation & Reimbursement</Title>
        <p className="mb-4">
          Applications{' '}
          <strong>
            <em>must</em>
          </strong>{' '}
          be confirmed explicitly via <Link href="mailto:refund@java.no">refund@java.no</Link> and
          are only accepted prior to our conference. Reimbursements are provided after the
          conference. For this, we require you to send us copies of all receipts, the name of your
          bank and international account numbers (IBAN, BIC/SWIFT, if available). We reserve the
          right to decline a refund application. Speakers living in proximity to Oslo are not
          eligible.
        </p>
        <p>
          Reimbursements are processed and paid after the conference. We will reach out to speakers
          who applied for reimbursement and process the payments once payment details are provided.
        </p>
      </Section>
    </Section>
  )
}
