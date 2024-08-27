import styled from 'styled-components'

export const Container = styled.main`
  gap: 32px;
`

export const SkillsContainer = styled.div`
  display: grid;
  gap: 8px;
  grid-auto-rows: 84px;
  grid-template-columns: repeat(auto-fill, 100px);
  max-width: 900px;
  place-content: center;
  width: 100%;
`
