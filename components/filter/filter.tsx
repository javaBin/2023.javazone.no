import { Session, SessionFormat, SessionLanguage } from '@/app/program/program'
import { useCallback, useState } from 'react'


type FormatFilter = Exclude<SessionFormat, 'workshop'> | 'favorites'
type LanguageFilter = SessionLanguage

export interface Filter {
  weekday?: 3 | 4 // Datoen som tekst i formatet "YYYY-MM-DD"
  format?: FormatFilter
  language?: LanguageFilter
  favorites?: string[] // En liste over sessionIds som er favoritter
  isAIZone?: boolean
}

export const filter = (sessions: Session[], { weekday, language }: Filter = {}) => {
  return sessions.filter((session) => {
    const startTime = session.startTime ? new Date(session.startTime) : undefined
    const filterDate = !weekday || startTime?.getDay() === weekday
    const filterLanguage = !language || session.language === language
    return filterDate && filterLanguage
  })
}
export const filterStorageKey = 'program-filter'
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
    window.localStorage.setItem(filterStorageKey, JSON.stringify({...filterState, ...filter}))
  }, [filterState])

  return {
    filterState,
    updateFilter,
  }
}
