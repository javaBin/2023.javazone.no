import Image from 'next/image'
import styles from './page.module.css'

export default function SuperOverflowPage() {
  return (
    <div>
      <h1 className="title">Superoverflow</h1>

      <section className="content is-normal">
          <p>We regret to inform you that we have made the difficult decision to cancel JavaZone SuperOverflow 2023 due to insufficient registrations.</p>
          <p>All SuperOverflow ticket holders will receive a full refund of their purchase within a short period of time.</p>
          <p>We apologize for any inconvenience caused by this cancellation and thank you for your understanding.</p>
      </section>
    </div>
  )
}
