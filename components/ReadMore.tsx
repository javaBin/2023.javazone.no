import { ReactNode, useState } from 'react'

export const ReadMore = ({ children }: { children: ReactNode }) => {
  const [open, setIsOpen] = useState(false)
  return (
    <>
      <button
        className="button is-dark-blue"
        aria-expanded={open}
        onClick={() => setIsOpen((current) => !current)}
      >
        Read more
      </button>
      <div aria-hidden={!open} style={{ display: open ? 'block' : 'none' }}>
        {children}
      </div>
    </>
  )
}
