"use client"

import { Session } from "@/app/program/program";
import { filter, useFilter } from "@/components/filter/filter";
import { SimpleTalk } from "@/app/program/SimpleTalk";
import { ProgramFilter } from "@/app/program/ProgramFilter";

interface FilteredSessionProps {
  sessions: Session[];
}

export default function FilteredSessions({ sessions }: FilteredSessionProps) {
  const { filterState, updateFilter } = useFilter();
  const filteredSessions = filter(sessions, filterState)

  return (
    <div>
      <ProgramFilter filter={filterState} onFilterChange={updateFilter} />
      {filteredSessions.map((session) => (
        <SimpleTalk key={session.sessionId} session={session} />
      ))}
    </div>
  );
};
