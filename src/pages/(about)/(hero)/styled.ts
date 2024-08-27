import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;

  figure img {
    border-radius: 50%;
    box-shadow: 4px 4px 6px 4px #00000025;
    height: auto;
    max-width: 384px;
    vertical-align: top;
    width: 100%;
  }

  @media (max-width: 1024px) {
    gap: 8px;
  }

  @media (max-width: 764px) {
    figure img {
      max-width: 284px;
    }
  }
`

export const InfoContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  max-width: 204px;
  width: 100%;

  > div, a {
    align-items: center;
    cursor: pointer;
    display: flex;
    gap: 8px;
    justify-content: center;
    padding: 4px 8px;
    text-decoration: none;
    transition: all 0.2s linear;
    width: 100%;

    svg {
      width: 16px;
    }

    &, p {
      color: #fff;
      font-size: 14px;
      font-weight: 600;
    }

    &:hover {
      background-color: #2F2842;
      border-radius: 4px;
      box-shadow: 4px 4px 6px 4px #00000025;
      scale: 1.02;
    }
  }

  @media (max-width: 1024px) {
    gap: 0;
  }
`
