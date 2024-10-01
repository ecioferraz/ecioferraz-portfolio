import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translate(50%, 0);
  }

  50% {
    opacity: .5;
  }

  100% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
`

export const Container = styled.div`
  animation: ${fadeIn} 1s linear;
  display: flex;
  flex-direction: column;
  gap: 16px;

  p {
    font-weight: 500;
    max-width: 564px;
    text-align: justify;
  }
`

export const TitleContainer = styled.div`
  align-items: baseline;
  display: flex;
  gap: 8px;

  h1 {
    font-size: 64px;
    line-height: 64px;
  }

  svg {
    width: 64px;
  }

  @media (max-width: 1024px) {
    justify-content: center;

    h1 {
      font-size: 52px;
      text-align: center;
    }

    svg {
      width: 52px;
    }
  }
`
