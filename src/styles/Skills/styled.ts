import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translate(0, 20%);
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

export const SkillsContainer = styled.div`
  animation: ${fadeIn} 0.5s linear;
  display: grid;
  gap: 8px;
  grid-auto-rows: 84px;
  grid-template-columns: repeat(auto-fill, 100px);
  max-width: 900px;
  place-content: center;
  width: 100%;
`
