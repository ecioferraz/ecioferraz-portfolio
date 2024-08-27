import { type ReactElement } from 'react'
import type SkillCardProps from './props'
import * as S from './styled'

export default function SkillCard ({ icon, title }: SkillCardProps): ReactElement {
  return <S.Container>
    {icon}

    <span>{title}</span>
  </S.Container>
}
