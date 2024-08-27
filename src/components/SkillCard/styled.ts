import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  max-width: 100px;
  transition: all 0.4s ease-in-out;
  width: 100%;

  svg {
    max-width: 36px;
    transform: translateY(50%);
    transition: transform 0.4s ease-in-out;
  }

  span {
    font-size: 12px;
    font-weight: 500;
    opacity: 0;
    text-align: center;
    transform: translateY(16px);
    transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
    white-space: pre-wrap;
  }

  &:hover {
    background-color: #2F2842;
    border-radius: 4px;
    box-shadow: 4px 4px 6px 4px #00000025;
    transform: scale(1.02);

    svg {
      transform: translateY(0px);
    }

    span {
      opacity: 1;
      transform: translateY(0);
    }
  }
`
