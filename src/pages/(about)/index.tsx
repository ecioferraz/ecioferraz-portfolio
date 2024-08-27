import Hero from '@/components/About/Hero'
import Info from '@/components/About/Info'
import * as S from '@/styles/About/styled'
import { type ReactElement } from 'react'

export default function About (): ReactElement {
  return <S.Container>
    <Hero />

    <Info />
  </S.Container>
}
