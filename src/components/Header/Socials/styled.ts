import styled from 'styled-components'

export const SocialsContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: right;

  a {
    display: flex;
    color: #fff;
    height: 100%;
    padding-inline: 16px;
    text-decoration: none;
    transition: all 0.4s linear;

    svg {
      width: 20px;
    }

    &:hover {
      background-color: #2F2842;
      border-radius: 4px;
      box-shadow: 4px 4px 6px 4px #00000025;
      scale: 1.02;
      text-decoration: underline;
    }
  }

  @media (max-width: 764px) {
    &.desktop {
      display: none;
    }
  }

  @media (min-width: 764px) {
    &.mobile {
      display: none;
    }
  }
`
