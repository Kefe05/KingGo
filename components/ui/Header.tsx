"use client"
import styled from 'styled-components'
import { usePathname } from 'next/navigation'

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
`

export default function Header() {
  const pathname = usePathname()

  return <StyledHeader>  {pathname
          .split("/")
          .pop()
          ?.replace("-", " ")
          .replace(/\b\w/g, (l) => l.toUpperCase()) || "Dashboard"}</StyledHeader>
}
