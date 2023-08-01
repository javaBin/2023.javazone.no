import { Filter } from '@/components/filter/filter'
import styles from './ProgramFilter.module.css'

// weekdays
const WEDNESDAY = 3
const THURSDAY = 4

interface Props {
  filter: Filter
  onFilterChange: (filter: Filter) => void
  statistics: {all: number, presentation: number, lightningTalks: number, favorites: number}
}

export const ProgramFilter = ({ onFilterChange, filter, statistics = { presentation: 0, favorites: 0, lightningTalks: 0, all: 0} }: Props) => {
  const clearFilter = () =>
    onFilterChange({
      format: undefined,
      language: undefined,
      weekday: undefined,
    })

  return (
    <section className={styles.filter_container}>
      <div className={styles.filter}>
        <div className={styles.day}>
          <p>Day</p>
          <button
            disabled
            className={`${styles.button} is-dark-blue button`}
            data-active={filter.weekday === undefined}
            onClick={() => onFilterChange({ weekday: undefined })}
          >
            Both
          </button>
          <button
            disabled
            className={`${styles.button} is-dark-blue button`}
            data-active={filter.weekday === WEDNESDAY}
            onClick={() => onFilterChange({ weekday: WEDNESDAY })}
          >
            Wednesday
          </button>
          <button
            disabled
            className={`${styles.button} is-dark-blue button`}
            data-active={filter.weekday === THURSDAY}
            onClick={() => onFilterChange({ weekday: THURSDAY })}
          >
            Thursday
          </button>
        </div>
        <div className={styles.language}>
          <p>Language</p>
          <button
            className={`${styles.button} is-dark-blue button`}
            data-active={filter.language === undefined}
            onClick={() => onFilterChange({ language: undefined })}
          >
            Both
          </button>
          <button
            className={`${styles.button} is-dark-blue button`}
            data-active={filter.language === 'no'}
            onClick={() => onFilterChange({ language: 'no' })}
          >
            Norwegian
          </button>
          <button
            className={`${styles.button} is-dark-blue button`}
            data-active={filter.language === 'en'}
            onClick={() => onFilterChange({ language: 'en' })}
          >
            English
          </button>
        </div>
        <div className={styles.format}>
          <p>Format</p>
          <button
            className={`${styles.button} is-dark-blue button`}
            data-active={filter.format === undefined}
            onClick={() => onFilterChange({ format: undefined })}
          >
            All ({statistics.all})
          </button>
          <button
            className={`${styles.button} is-dark-blue button`}
            data-active={filter.format === 'presentation'}
            onClick={() => onFilterChange({ format: 'presentation' })}
          >
            Presentation ({statistics.presentation})
          </button>
          <button
            className={`${styles.button} is-dark-blue button`}
            data-active={filter.format === 'lightning-talk'}
            onClick={() => onFilterChange({ format: 'lightning-talk' })}
          >
            Lightning talks ({statistics.lightningTalks})
          </button>
          <button
            className={`${styles.button} is-dark-blue button`}
            data-active={filter.format === 'favorites'}
            onClick={() =>
              onFilterChange({
                format: 'favorites',
              })
            }
          >
            My favorites ({statistics.favorites})
          </button>
        </div>
        <div className={styles.clear_filter}>
          <button className={`${styles.button} is-dark-blue button`} onClick={clearFilter}>
            Clear filters
          </button>
        </div>
      </div>
    </section>
  )
}
