import ProjectCard from '@/components/ProjectCard'
import { type ReactElement } from 'react'
import projects from './projects'
import * as S from './styled'

export default function Projects (): ReactElement {
  return <S.Container>
    <h1>Projetos</h1>

    <S.ProjectsContainer>
      {projects.map((project) => <ProjectCard {...project} key={project.title} />)}
    </S.ProjectsContainer>
  </S.Container>
}
