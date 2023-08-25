import dynamic from 'next/dynamic'
import { partners } from '@/app/(main)/api/partners/partners'
import React from 'react'

const PartnerOverview = dynamic(() => import('@/app/(main)/partners/PartnerOverview'), {
  ssr: false,
})

export default function Page() {
  return <PartnerOverview partners={partners} />
}
