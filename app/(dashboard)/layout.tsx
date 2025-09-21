import AppLayout from '@/components/AppLayout'

import React, { ReactNode } from 'react'

export default function DashboardLayout({children}: {children: ReactNode}) {
  return (
    <AppLayout>{children}</AppLayout>
  )
}
