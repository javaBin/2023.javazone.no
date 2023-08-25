import dynamic from 'next/dynamic'
import { partners } from '@/app/(main)/api/partners/partners'
import React from 'react'
import * as console from "console";

const PartnerOverview = dynamic(() => import('@/app/(main)/partners/PartnerOverview'), { ssr: false })

export default function Page() {
  console.log("hello")
  return <PartnerOverview partners={partners} />
}
