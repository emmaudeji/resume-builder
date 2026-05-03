import { ResumeBuilderProvider } from '@/context/resume-builder.context'
import React from 'react'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ResumeBuilderProvider>
      {children}
    </ResumeBuilderProvider>
  )
}