import Link from 'next/link'
import { type ReactElement } from 'react'
import type ProjectCardProps from './props'
import * as S from './styled'

export default function ProjectCard ({ bgImg, gitHubURL, projectURL, title }: ProjectCardProps): ReactElement {
  return <S.Container>
    <S.ContainerBg $bgImg={bgImg}>
      <S.Overlay />

      <S.Content>
        <p>{title}</p>

        <S.LinksContainer>
          {projectURL && <>
            <Link href={projectURL}>Ver projeto</Link>

            <hr/>
          </>}

          <Link href={gitHubURL}>Ver código</Link>
        </S.LinksContainer>

      </S.Content>
    </S.ContainerBg>
  </S.Container>
}
