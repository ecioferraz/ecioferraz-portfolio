import Link from 'next/link'
import styled from 'styled-components'

export const NavLink = styled(Link)<{ $active: boolean }>`
  color: #fff;
  flex: 1;
  font-weight: 500;
  line-height: 56px;
  padding-inline: 20px;
  position: relative;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;

  &::after {
    background-color: currentColor;
    border-radius: 50%;
    bottom: 0;
    color: #fff;
    content: '';
    height: 2px;
    left: 50%;
    position: absolute;
    transform: translateX(-50%) scaleX(${({ $active }) => $active ? 1 : 0});
    transform-origin: center;
    transition: transform .6s linear;
    width: 100%;
  }

  &:hover {
    background-color: #ffffff20;
    box-shadow: 4px 4px 6px 4px #00000025;
    position: relative;
    transition: all 1s linear;

    &::after {
      transform: translateX(-50%) scaleX(1);
    }
  }
`
