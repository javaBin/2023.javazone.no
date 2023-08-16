import {SessionFormat, SessionLanguage} from "./program";

export const prettyLanguage = (language: SessionLanguage) =>
  language === 'no' ? 'Norwegian 🇳🇴' : 'English 🇬🇧'
export const formatter = new Intl.DateTimeFormat(['en'], {
  weekday: 'long',
  hour: 'numeric',
  minute: 'numeric',
})
export const prettyFormat = (format: Filter['format']) => {
  switch (format) {
    case 'presentation':
      return 'Presentation 📣'
    case 'lightning-talk':
      return 'Lightning talk 🚀'
    case 'workshop':
      return 'Workshop 👥'
    case 'favorites':
      return 'My favorites'
    default:
      return ''
  }
}

export type Day = 'Tuesday' | 'Wednesday' | 'Thursday'

interface Filter {
  format?: SessionFormat | 'favorites'
  language?: SessionLanguage
  room?: string
  day?: Day
}
