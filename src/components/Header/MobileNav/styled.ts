import styled from 'styled-components'
import SocialsComponent from '../Socials'

export const Container = styled.div<{ $menuOpen: boolean }>`
  background-color: #2F2842;
  box-shadow: 4px 4px 6px 4px #00000025;
  display: flex;
  flex-direction: column;
  left: ${({ $menuOpen }) => $menuOpen ? 0 : '-100%'};
  min-height: 100vh;
  position: fixed;
  transition: left 0.6s linear;
  width: 76vw;
  z-index: 1;

  @media (min-width: 764px) {
    display: none;
  }
`

export const CloseButton = styled.button`
  aspect-ratio: 1;
  align-self: flex-end;
  background-color: transparent;
  border: none;
  max-width: 56px;
  outline: none;
  position: relative;
  width: 100%;
`

export const Line = styled.div<{ $rotation: string }>`
  background-color: #fff;
  border-radius: 20px;
  height: 4px;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%) rotate(${({ $rotation }) => $rotation});
  width: 24px;
`

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;

  ul {
    list-style: none;

    li {
      align-items: flex-start;
      display: flex;
      justify-content: center;
      width: 100%;
    }
  }
`

export const Socials = styled(SocialsComponent)`
  height: 56px;
  padding-inline: 20px;
`
