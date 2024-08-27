import styled from 'styled-components'

export const Container = styled.header`
  background-color: #2F2842;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 56px;
  padding-inline: 20px;
  width: 100%;

  @media (max-width: 764px) {
    padding-left: 8px;
    position: relative;
  }
`

export const MobileToggle = styled.div`
  aspect-ratio: 1;
  align-items: center;
  background-color: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  outline: none;
  transition: all 0.4s linear;
  width: fit-content;

  > div {
    background-color: #fff;
    height: 2px;
    width: 24px;
  }

  &:hover {
    background-color: #2F2842;
    border-radius: 4px;
    box-shadow: 4px 4px 6px 4px #00000025;
    scale: 1.02;
    text-decoration: underline;
  }

  @media (min-width: 764px) {
    display: none;
  }
`
