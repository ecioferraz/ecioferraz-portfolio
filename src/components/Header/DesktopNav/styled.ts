import styled from 'styled-components'

export const Container = styled.nav`
  grid-column: 2;

  &, ul {
    height: 56px;
  }

  ul {
    align-items: center;
    display: flex;
    justify-content: space-around;
    list-style: none;

    li {
      align-items: center;
      display: flex;
      justify-content: center;
      width: 100%;
    }
  }

  @media (max-width: 764px) {
    display: none;
  }
`
