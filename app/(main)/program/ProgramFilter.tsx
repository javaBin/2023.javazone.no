import { Filter } from '@/components/filter/filter'
import { ReactNode } from 'react'

// weekdays
const WEDNESDAY = 3
const THURSDAY = 4

export interface Statistics {
  all: number
  presentation: number
  lightningTalks: number
  favorites: number
  aiZone: number
}

interface Props {
  filter: Filter
  onFilterChange: (filter: Filter) => void
  statistics: Statistics
}

type ButtonProps = {
  onClick: () => void
  dataActive?: boolean
  disabled?: boolean
  children?: ReactNode
}

const Button = (props: ButtonProps) => {
  const buttonClassNames = [
    'px-8',
    'py-2',
    'h-[2.5em]',
    'pointer',
    'border-none',
    'rounded',
    'm-1',
    'font-bold',
    'text-lg',
    'text-red-text-color',
    'bg-normal-text-color',
    'border-transparent',
    'text-center',
    'whitespace-nowrap',
  ]
  const buttonPseudoClassNames = [
    'hover:text-hover-text-color',
    'data-[active=true]:bg-white',
    'disabled:opacity-50',
    'disabled:shadow-none',
    'disabled:cursor-not-allowed',
  ]
  return (
    <button
      className={buttonClassNames.join(' ') + ' ' + buttonPseudoClassNames.join(' ')}
      data-active={props.dataActive}
      {...props}
    >
      {props.children}
    </button>
  )
}

export const ProgramFilter = ({
  onFilterChange,
  filter,
  statistics = { presentation: 0, favorites: 0, lightningTalks: 0, all: 0, aiZone: 0 },
}: Props) => {
  const clearFilter = () =>
    onFilterChange({
      format: undefined,
      language: undefined,
      weekday: undefined,
      isAIZone: false
    })

  return (
    <section className="bg-dark-blue-background p-4 grid gap-4 grid-cols-1 lg:grid-cols-2 mb-8">
      <div className="col-span-1">
        <p className="bold text-big-text-color">Day</p>
        <Button
          dataActive={filter.weekday === undefined}
          onClick={() => onFilterChange({ weekday: undefined })}
        >
          Both
        </Button>
        <Button
          dataActive={filter.weekday === WEDNESDAY}
          onClick={() => onFilterChange({ weekday: WEDNESDAY })}
        >
          Wednesday
        </Button>
        <Button
          dataActive={filter.weekday === THURSDAY}
          onClick={() => onFilterChange({ weekday: THURSDAY })}
        >
          Thursday
        </Button>
      </div>
      <div className="col-span-1">
        <p className="bold text-big-text-color">Language</p>
        <Button
          dataActive={filter.language === undefined}
          onClick={() => onFilterChange({ language: undefined })}
        >
          Both
        </Button>
        <Button
          dataActive={filter.language === 'no'}
          onClick={() => onFilterChange({ language: 'no' })}
        >
          Norwegian
        </Button>
        <Button
          dataActive={filter.language === 'en'}
          onClick={() => onFilterChange({ language: 'en' })}
        >
          English
        </Button>
      </div>
      <div className="col-span-full">
        <p className="bold text-big-text-color">Format</p>
        <Button
          dataActive={filter.format === undefined}
          onClick={() => onFilterChange({ format: undefined, isAIZone: false })}
        >
          All ({statistics.all})
        </Button>
        <Button
          dataActive={filter.format === 'presentation'}
          onClick={() => onFilterChange({ format: 'presentation', isAIZone: false })}
        >
          Presentation ({statistics.presentation})
        </Button>
        <Button
          dataActive={filter.format === 'lightning-talk'}
          onClick={() => onFilterChange({ format: 'lightning-talk', isAIZone: false })}
        >
          Lightning talks ({statistics.lightningTalks})
        </Button>
        <Button
          dataActive={filter.isAIZone}
          onClick={() =>
            onFilterChange({
              isAIZone: !filter.isAIZone,
              format: undefined
            })
          }
        >
          AI Zone ({statistics.aiZone})
        </Button>
        <Button
          dataActive={filter.format === 'favorites'}
          onClick={() =>
            onFilterChange({
              isAIZone: false,
              format: 'favorites',
            })
          }
        >
          My favorites ({statistics.favorites})
        </Button>
      </div>
      <div className="col-span-1">
        <Button onClick={clearFilter}>Clear filters</Button>
      </div>
    </section>
  )
}
