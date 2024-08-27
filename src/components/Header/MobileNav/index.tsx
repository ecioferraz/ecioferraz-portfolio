import { type ReactElement } from 'react'
import NavLink from '../NavLink'
import type MobileNavProps from './props'
import * as S from './styled'

export default function MobileNav ({ menuOpen, closeMenu }: MobileNavProps): ReactElement {
  return <S.Container $menuOpen={menuOpen}>
    <S.CloseButton onClick={closeMenu}>
      <S.Line $rotation="135deg" />
      <S.Line $rotation="45deg" />
    </S.CloseButton>

    <S.NavContainer>
      <ul>
        <li onClick={closeMenu}>
          <NavLink path="/" title="Quem sou eu" />
        </li>

        <li onClick={closeMenu}>
          <NavLink path="/habilidades" title="Habilidades" />
        </li>

        <li onClick={closeMenu}>
          <NavLink path="/projetos" title="Projetos" />
        </li>
      </ul>
    </S.NavContainer>

    <S.Socials />
  </S.Container>
}
