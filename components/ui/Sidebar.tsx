"use client"
import React from 'react'
import MainNav from './MainNav'
import styled from 'styled-components'


const StyledSidebar = styled.div`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border: 1px solid var(--color-grey-100);
  grid-row: 1 /-1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`

export default function Sidebar() {
  return (
    <StyledSidebar>
      <h1 className='text-4xl font-semibold'>KingGo</h1>
      <MainNav />
    
    </StyledSidebar>
  )
}
