import { type ReactElement } from 'react'
import Hero from './(hero)'
import Info from './(Info)'
import * as S from './styled'

export default function About (): ReactElement {
  return <S.Container>
    <Hero />

    <Info />
  </S.Container>
}
