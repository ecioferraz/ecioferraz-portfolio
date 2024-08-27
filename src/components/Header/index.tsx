import { useClickOutside } from '@/hooks/useClickOutside'
import { useState, type ReactElement } from 'react'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
import * as S from './styled'

export default function Header (): ReactElement {
  const [menuOpen, setMenuOpen] = useState(false)
  const wrapperRef = useClickOutside(() => { setMenuOpen(false) })

  return <S.Container ref={wrapperRef}>
    <DesktopNav />

    <S.MobileToggle onClick={() => { setMenuOpen(true) }}>
      <div />
      <div />
      <div />
    </S.MobileToggle>

    <MobileNav
      menuOpen={menuOpen}
      closeMenu={() => { setMenuOpen(false) }}
    />
  </S.Container>
}
