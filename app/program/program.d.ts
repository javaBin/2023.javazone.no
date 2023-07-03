export interface Program {
  sessions: Session[]
}

export type SessionLanguage = "no" | "en"

export type SessionFormat = "presentation" | "lightning-talk" | "workshop"

export interface Session {
  intendedAudience: string
  length: string
  format: SessionFormat
  language: SessionLanguage
  abstract: string
  title: string
  room?: string
  startTime?: string
  endTime?: string
  video?: string
  startTimeZulu: string
  endTimeZulu: string
  id: string
  sessionId: string
  conferenceId: string
  startSlot: string
  startSlotZulu: string
  speakers: Speaker[]
  registerLoc?: string
}

export interface Speaker {
  name: string
  bio?: string
  twitter: string
}
