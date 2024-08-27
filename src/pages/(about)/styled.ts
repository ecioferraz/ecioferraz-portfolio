import styled from 'styled-components'

export const Container = styled.main`
  flex-direction: row;
  gap: 48px;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 24px;
  }
`
