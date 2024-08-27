import SkillCard from '@/components/SkillCard'
import * as S from '@/styles/Skills/styled'
import { type ReactElement } from 'react'
import skills from '../../data/Skills/skills'

export default function Skills (): ReactElement {
  return <S.Container>
    <h1>Habilidades</h1>

    <S.SkillsContainer>
      {skills.map((skill) => <SkillCard {...skill} key={skill.title} />)}
    </S.SkillsContainer>
  </S.Container>
}
