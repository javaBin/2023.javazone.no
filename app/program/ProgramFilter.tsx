import { Filter } from '@/components/filter/filter'

const WEDNESDAY = '2023-09-06'
const THURSDAY = '2023-09-07'

interface Props {
  filter: Filter
  onFilterChange: (filter: Filter) => void
}

export const ProgramFilter = ({ onFilterChange }: Props) => {
  return (
    <section>
      <div>
        Day
        <button onClick={() => onFilterChange({ date: undefined })}>Both</button>
        <button onClick={() => onFilterChange({ date: WEDNESDAY })}>Wednesday</button>
        <button onClick={() => onFilterChange({ date: THURSDAY })}>Thursday</button>
      </div>
      <div>
        Language
        <button onClick={() => onFilterChange({ language: undefined })}>Both</button>
        <button onClick={() => onFilterChange({ language: 'no' })}>Norwegian</button>
        <button onClick={() => onFilterChange({ language: 'en' })}>English</button>
      </div>
      <div>
        Format
        <button onClick={() => onFilterChange({ format: undefined })}>All</button>
        <button onClick={() => onFilterChange({ format: 'presentation' })}>Presentation</button>
        <button onClick={() => onFilterChange({ format: 'lightning-talk' })}>
          Lightning talks
        </button>
        <button onClick={() => onFilterChange({ format: 'favorites', favorites: ["18aaf407-ff02-4f49-b11d-29877a9de906"] })}>My favorites</button>
      </div>
    </section>
  )
}

