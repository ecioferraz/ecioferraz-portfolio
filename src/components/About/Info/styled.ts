import styled from 'styled-components'

export const Container = styled.div`
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
