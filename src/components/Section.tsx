import React from 'react'
import TextButton from './TextButton'

interface SectionProps {
  title: string
  action?: { href: string; text: string }
}

const Section = ({
  title,
  action,
  children
}: React.PropsWithChildren<SectionProps>) => {
  return (
    <div className="mx-auto mt-5 max-w-2xl">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-bold">{title}</h2>
        {action && <TextButton href={action.href}>{action.text}</TextButton>}
      </div>
      {children}
    </div>
  )
}

export default Section
