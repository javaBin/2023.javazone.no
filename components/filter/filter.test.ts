import { filter, useFilter, Filter } from './filter';
import { Session } from "@/app/program/program";

// Dummy data for testing
const dummySessions: Session[] = [
  {
    intendedAudience: 'Developers',
    length: '30 mins',
    format: 'presentation',
    language: 'en',
    abstract: 'This is a dummy session',
    title: 'Dummy Session 1',
    startTime: '2023-09-06T10:00:00',
    endTime: '2023-09-06T10:30:00',
    startTimeZulu: '2023-09-06T08:00:00Z',
    endTimeZulu: '2023-09-06T08:30:00Z',
    id: 'session1',
    sessionId: 'session1',
    conferenceId: 'conf1',
    startSlot: '10',
    startSlotZulu: '08',
    speakers: [{ name: 'John Doe', twitter: '@johndoe' }],
  },
  // Add more dummy sessions here...
];

describe('filter', () => {
  it('should filter sessions by weekday and language', () => {
    const filterOptions: Filter = {
      weekday: 4, // 4 corresponds to Thursday
      language: 'en',
    };
    const filteredSessions = filter(dummySessions, filterOptions);
    expect(filteredSessions).toEqual([]);
  });

  it('should filter sessions by format and language', () => {
    const filterOptions: Filter = {
      format: 'favorites',
      language: 'no',
    };
    const filteredSessions = filter(dummySessions, filterOptions);
    expect(filteredSessions).toEqual([]);
  });

  it('should filter sessions by weekday, format, and language', () => {
    const filterOptions: Filter = {
      weekday: 3, // 3 corresponds to Wednesday
      format: 'presentation',
      language: 'en',
    };
    const filteredSessions = filter(dummySessions, filterOptions);
    expect(filteredSessions).toEqual([dummySessions[0]]);
  });

  it('should return all sessions if no filters are specified', () => {
    const filteredSessions = filter(dummySessions);
    expect(filteredSessions).toEqual(dummySessions);
  });
});

describe('useFilter', () => {
  it('should initialize filterState with favorites as an empty array', () => {
    const { filterState } = useFilter();
    expect(filterState).toEqual({ favorites: [] });
  });

  it('should update filterState with the provided filter', () => {
    const { filterState, updateFilter } = useFilter();
    const filterOptions: Filter = {
      weekday: 3,
      format: 'presentation',
      language: 'en',
    };
    updateFilter(filterOptions);
    expect(filterState).toEqual({ favorites: [], ...filterOptions });
  });

  it('should store the updated filterState in localStorage', () => {
    const { updateFilter } = useFilter();
    const filterOptions: Filter = {
      weekday: 3,
      format: 'presentation',
      language: 'en',
    };
    updateFilter(filterOptions);
    const storedState = JSON.parse(window.localStorage.getItem('program-filter') || '');
    expect(storedState).toEqual({ favorites: [], ...filterOptions });
  });
});
