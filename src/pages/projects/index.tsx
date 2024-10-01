import ProjectCard from '@/components/ProjectCard'
import projects from '@/data/Projects/projects'
import * as S from '@/styles/Projects/styled'
import { type ReactElement } from 'react'

export default function Projects (): ReactElement {
  return <S.Container>
    <h1>Projetos</h1>

    <S.ProjectsContainer $childrenLength={projects.length}>
      {projects.map((project) => <ProjectCard {...project} key={project.title} />)}
    </S.ProjectsContainer>
  </S.Container>
}
