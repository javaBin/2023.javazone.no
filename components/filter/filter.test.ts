// Opprett noen dummy data for testing
import { Session, SessionFormat, SessionLanguage } from '@/app/program/program'

import { filter } from "./filter";

const dummySession1: Session = {
  intendedAudience: 'Developers',
  length: '30 mins',
  format: 'presentation',
  language: 'en',
  abstract: 'This is a dummy session',
  title: 'Dummy Session 1',
  startTime: '2023-09-06T10:00:00',
  endTime: '2023-09-06T10:30:00',
  startTimeZulu: '2023-08-15T08:00:00Z',
  endTimeZulu: '2023-08-15T08:30:00Z',
  id: 'session1',
  sessionId: 'session1',
  conferenceId: 'conf1',
  startSlot: '10',
  startSlotZulu: '08',
  speakers: [{ name: 'John Doe', twitter: '@johndoe' }],
}

const dummySession2: Session = {
  intendedAudience: 'Designers',
  length: '1 hour',
  format: 'lightning-talk',
  language: 'no',
  abstract: 'This is another dummy session',
  title: 'Dummy Session 2',
  startTime: '2023-09-07T14:00:00',
  endTime: '2023-09-07T15:00:00',
  startTimeZulu: '2023-08-15T12:00:00Z',
  endTimeZulu: '2023-08-15T13:00:00Z',
  id: 'session2',
  sessionId: 'session2',
  conferenceId: 'conf1',
  startSlot: '14',
  startSlotZulu: '12',
  speakers: [{ name: 'Jane Doe', twitter: '@janedoe' }],
}

const dummyProgram = [dummySession1, dummySession2]

describe('filter', () => {
  it('should filter sessions by date', () => {
    const filteredSessions = filter(dummyProgram, {
      weekday: 3,
    })
    expect(filteredSessions).toEqual([dummySession1])
  })

  it('should filter sessions by sessionFormat', () => {
    const filteredSessions = filter(dummyProgram, {
      format: 'lightning-talk',
    })
    expect(filteredSessions).toEqual([dummySession2])
  })

  it('should filter sessions by language', () => {
    const filterOptions = {
      language: 'en' as SessionLanguage,
    }
    const filteredSessions = filter(dummyProgram, filterOptions)
    expect(filteredSessions).toEqual([dummySession1])
  })

  it('should filter sessions by favorites', () => {
    const filteredSessions = filter(dummyProgram, {
      favorites: ['session1'],
      format: "favorites"
    })
    expect(filteredSessions).toEqual([dummySession1])
  })

  it('should filter sessions by multiple criteria', () => {
    const filterOptions = {
      date: '2023-08-15',
      sessionFormat: 'presentation' as SessionFormat,
      language: 'en' as SessionLanguage,
      favorites: ['session1'],
    }
    const filteredSessions = filter(dummyProgram, filterOptions)
    expect(filteredSessions).toEqual([dummySession1])
  })

  it('should return all sessions if no filters are specified', () => {
    const filterOptions = {}
    const filteredSessions = filter(dummyProgram, filterOptions)
    expect(filteredSessions).toEqual([dummySession1, dummySession2])
  })

  it('should return an empty array if no sessions match the filters', () => {
    const filteredSessions = filter(dummyProgram, {
      weekday: 3,
      format: 'favorites',
      language: undefined,
      favorites: [],
    })
    expect(filteredSessions).toEqual([])
  })
})
