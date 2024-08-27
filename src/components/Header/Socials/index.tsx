import { Github, Linkedin } from '@styled-icons/boxicons-logos'
import Link from 'next/link'
import { type HTMLAttributes, type ReactElement } from 'react'
import * as S from './styled'

export default function Socials (props: HTMLAttributes<HTMLDivElement>): ReactElement {
  return <S.SocialsContainer {...props}>
    <Link href="https://github.com/ecioferraz" rel="noreferrer" target="_blank">
      <Github />
    </Link>

    <Link href="https://linkedin.com/in/ecioferraz/" rel="noreferrer" target="_blank">
      <Linkedin />
    </Link>
  </S.SocialsContainer>
}
