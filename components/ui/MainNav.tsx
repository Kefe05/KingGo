"use client"
import styled from 'styled-components';
import Link from 'next/link';
import { HiOutlineHome, HiOutlineUsers } from 'react-icons/hi';
import { RiHistoryFill } from "react-icons/ri";
import { IoStatsChartOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { MdAccountBalanceWallet } from "react-icons/md";
import { usePathname } from 'next/navigation';


const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(Link)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-grey-900);
  }
`;

const navigation =[
  {
  name: "Home",
  icon:  <HiOutlineHome />,
  link: "/dashboard"
},
  {
  name: "Analytics",
  icon:  <IoStatsChartOutline />,
  link: "/analytics"
},
  {
  name: "History",
  icon:  <RiHistoryFill />,
  link: "/history"
},
  {
  name: "Notification",
  icon:  <IoIosNotificationsOutline />,
  link: "/notification"
},
  {
  name: "Account",
  icon:  <MdAccountBalanceWallet />,
  link: "/account"
},
  {
  name: "Settings",
  icon:  <IoSettingsOutline />,
  link: "/settings"
},
]


export default function MainNav() {
  const pathname = usePathname()
  return (
    <nav>
      <NavList>
       {navigation.map((navLink, index) => (
         <li key={`${navLink.name + index}`}>
          <StyledNavLink href={navLink.link} className={`${pathname.startsWith(navLink.link)? "bg-gray-200": ""}`}>
           {navLink.icon}
            <span>{navLink.name}</span>
          </StyledNavLink>
        </li>
       ))}
          
      </NavList>
    </nav>
  );
}
