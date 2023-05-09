import { NextResponse } from 'next/server'
import { partners } from './partners'

export async function GET() {
  return NextResponse.json(partners)
}
