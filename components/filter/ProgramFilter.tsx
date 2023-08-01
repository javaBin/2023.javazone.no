'use client'

import { Session, SessionFormat, SessionLanguage } from '@/app/program/program'

type FormatFilter = Exclude<SessionFormat, 'workshop'>
type LanguageFilter = SessionLanguage

interface Filter {
  date?: string // Datoen som tekst i formatet "YYYY-MM-DD"
  format?: FormatFilter
  language?: LanguageFilter
  favorites?: string[] // En liste over sessionIds som er favoritter
}

export const filter = (
  sessions: Session[],
  { date, favorites, format, language }: Filter = {},
) => {
  return sessions.filter((session) => {
    const filterDate = !date || session.startTime?.startsWith(date) || false
    const filterFormat = !format || session.format === format
    const filterLanguage = !language || session.language === language
    const filterFavorites = !favorites || favorites.includes(session.sessionId)

    return filterDate && filterFormat && filterLanguage && filterFavorites
  })
}
