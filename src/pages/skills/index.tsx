import SkillCard from '@/components/SkillCard'
import { type ReactElement } from 'react'
import skills from './skills'
import * as S from './styled'

export default function Skills (): ReactElement {
  return <S.Container>
    <h1>Habilidades</h1>

    <S.SkillsContainer>
      {skills.map((skill) => <SkillCard {...skill} key={skill.title} />)}
    </S.SkillsContainer>
  </S.Container>
}
