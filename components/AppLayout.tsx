"use client"
import Header from './ui/Header'
import Sidebar from './ui/Sidebar'
import styled from 'styled-components'
import { ReactNode } from 'react'

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  background-color: var(--color-grey-50);
  height: 100vh;
`

const Main = styled.main`
  padding: 4rem 4.8rem 6.4rem;


`

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`

export default function AppLayout({children}:{children: ReactNode}) {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main className='w-full h-full'>
        <Container className='bg-gray-50 w-full h-full'>
         {children}
        </Container>
      </Main>
    </StyledAppLayout>
  )
}
