import { type ReactElement } from 'react'
import NavLink from '../NavLink'
import Socials from '../Socials'
import * as S from './styled'

export default function DesktopNav (): ReactElement {
  return <>
    <S.Container>
      <ul>
        <li>
          <NavLink path="/" title="Quem sou eu" />
        </li>

        <li>
          <NavLink path="/habilidades" title="Habilidades" />
        </li>

        <li>
          <NavLink path="/projetos" title="Projetos" />
        </li>
      </ul>
    </S.Container>

    <Socials className="desktop" />
  </>
}
