import { useRouter } from 'next/router'
import { type ReactElement, useMemo, useState } from 'react'
import type NavLinkProps from './props'
import * as S from './styled'

export default function NavLink ({ path, title }: NavLinkProps): ReactElement {
  const [isActive, setIsActive] = useState(false)
  const { query: { slug } } = useRouter()

  const pathActive = useMemo(() => {
    const lowerTitle = title.toLowerCase()

    return slug ? slug.toString().toLowerCase() === lowerTitle : lowerTitle === 'quem sou eu'
  }, [slug, title])

  return <S.NavLink
    href={path}
    onMouseEnter={() => { setIsActive(true) }}
    onMouseLeave={() => { setIsActive(false) }}
    $active={isActive || pathActive}
  >
    {title}
  </S.NavLink>
}
