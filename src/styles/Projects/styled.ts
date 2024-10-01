import styled, { css, keyframes } from 'styled-components'

const fadeInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, 0);
  }

  50% {
    opacity: .5;
  }

  100% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
`

const fadeInRight = keyframes`
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

const fadeInTop = keyframes`
  0% {
    opacity: 0;
    transform: translate(0, -20%);
  }

  50% {
    opacity: .5;
  }

  100% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
`

export const Container = styled.main`
  gap: 32px;
`

export const ProjectsContainer = styled.div<{ $childrenLength: number }>`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  max-width: 900px;
  width: 100%;

  & > div:nth-child(3n + 1) {
    animation: ${fadeInLeft} 1s ease forwards;
  }

  & > div:nth-child(3n + 2):not(:last-child) {
    animation: ${fadeInTop} 1s ease forwards;
  }

  & > div:nth-child(3n + 3) {
    animation: ${fadeInRight} 1s ease forwards;
  }

  & > div:last-child {
    animation: ${({ $childrenLength }) => {
      if ($childrenLength % 2 === 0) return css`${fadeInRight} 1s ease forwards`
    }};
  }

  @media (max-width: 995px) {
    & > div {
      animation: none;
    }

    & > div:nth-child(2n + 1) {
      animation: ${fadeInLeft} 1s ease forwards !important;
    }

    & > div:nth-child(2n + 2) {
      animation: ${fadeInRight} 1s ease forwards !important;
    }
  }
`
