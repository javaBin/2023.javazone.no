'use client'

import 'core-js/actual/array/group-by'
import { Session } from '@/app/program/program'
import { filter, useFilter } from '@/components/filter/filter'
import { SimpleTalk } from '@/app/program/SimpleTalk'
import { ProgramFilter, Statistics } from '@/app/program/ProgramFilter'
import { useMemo } from 'react'
import { formatter } from '@/app/program/utils'
import { Title } from "@/components/title/Title";

interface FilteredSessionProps {
  sessions: Session[]
}

interface GroupedSessions {
  [time: string]: Session[]
}

const isAIZoneSession = (room: string = '') => room.toLowerCase() === 'room 3'

const getStatCount = (format: Session['format']) => (session: Session) => session.format === format

export default function FilteredSessions({ sessions }: FilteredSessionProps) {
  const { filterState, updateFilter } = useFilter()
  const filteredSessions = filter(sessions, filterState)
  const sessionsToInclude = filteredSessions.filter((session) => {
    const formatMatches =
      !filterState.format ||
      session.format === filterState.format ||
      filterState.favorites?.includes(session.sessionId)
    if (!filterState.isAIZone) {
      return formatMatches || filterState.favorites?.includes(session.sessionId)
    }
    return isAIZoneSession(session.room) || filterState.favorites?.includes(session.sessionId)
  })

  // New grouping feature coming soon to JS, in TC39 stage 3: https://github.com/tc39/proposal-array-grouping
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const groupedSessions: GroupedSessions = sessionsToInclude.groupBy((e: Session) => e.startSlot)

  const stats = useMemo(() => {
    return {
      all: filteredSessions.length,
      presentation: filteredSessions.filter(getStatCount('presentation')).length,
      lightningTalks: filteredSessions.filter(getStatCount('lightning-talk')).length,
      favorites: filteredSessions.filter(
        (session) => filterState.favorites?.includes(session.sessionId),
      ).length,
      aiZone: filteredSessions.filter((session) => isAIZoneSession(session.room)).length,
    } satisfies Statistics
  }, [filterState.favorites, filteredSessions])

  const toggleFavorite = (session: Session, isFavorite: boolean) => {
    if (isFavorite) {
      return updateFilter({
        favorites: filterState.favorites?.filter((favorite) => favorite !== session.sessionId),
      })
    }
    return updateFilter({ favorites: [...(filterState.favorites ?? []), session.sessionId] })
  }

  return (
    <div>
      <ProgramFilter filter={filterState} onFilterChange={updateFilter} statistics={stats} />
      {Object.entries(groupedSessions)
        .sort(([timeA], [timeB]) => timeA.localeCompare(timeB))
        .map(([time, sessions]) => (
          <section key={time}>
            <Title>
              {formatter.format(new Date(time))}
            </Title>
            {sessions
              .sort((a, b) => a.room!.localeCompare(b.room!) || a.startTime!.localeCompare(b.startTime!))
              .map((session) => {
                const isFavorite = filterState.favorites?.includes(session.sessionId) ?? false
                return (
                  <SimpleTalk key={session.sessionId} session={session}>
                    <button
                      aria-label={!isFavorite ? 'Add to favorites' : 'Remove from favorites'}
                      className="self-center text-3xl border-none bg-big-text-color rounded-[10%] px-2"
                      onClick={() => toggleFavorite(session, isFavorite)}
                    >
                      {isFavorite ? '💔' : '❤️'}
                    </button>
                  </SimpleTalk>
                )
              })}
          </section>
        ))}
    </div>
  )
}
