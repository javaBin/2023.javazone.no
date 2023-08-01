import { Session, SessionFormat, SessionLanguage } from '@/app/program/program'
import { useCallback, useState } from 'react'


type FormatFilter = Exclude<SessionFormat, 'workshop'> | 'favorites'
type LanguageFilter = SessionLanguage

export interface Filter {
  date?: string // Datoen som tekst i formatet "YYYY-MM-DD"
  format?: FormatFilter
  language?: LanguageFilter
  favorites?: string[] // En liste over sessionIds som er favoritter
}

export const filter = (sessions: Session[], { date, favorites, format, language }: Filter = {}) => {
  return sessions.filter((session) => {
    const filterDate = !date || session.startTime?.startsWith(date) || false
    const filterLanguage = !language || session.language === language

    if (format === "favorites") {
      return favorites?.includes(session.sessionId) && filterLanguage && filterDate
    }
    const filterFormat = !format || session.format === format

    return filterDate && filterFormat && filterLanguage
  })
}
const filterStorageKey = 'program-filter'
export const useFilter = () => {
  const [filterState, setFilterState] = useState<Filter>(() => {
    const storedState = window.localStorage.getItem(filterStorageKey)
    if (!storedState)
      return {
        favorites: [],
      }
    return JSON.parse(storedState) as Filter
  })

  const updateFilter = useCallback((filter: Filter) => {
    setFilterState((current) => ({...current, ...filter}))
    window.localStorage.setItem(filterStorageKey, JSON.stringify(filter))
  }, [])

  return {
    filterState,
    updateFilter,
  }
}
