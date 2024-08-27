import Image from 'next/image'
import { type ReactElement, useCallback, useState } from 'react'
import hero from '../assets/hero.png'
import { EMAIL, ICONS, INITIAL_STATE } from './contants'
import * as S from './styled'

export default function Hero (): ReactElement {
  const [buttonContent, setButtonContent] = useState(INITIAL_STATE)
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setButtonContent(prev => ({ ...prev, email: { icon: ICONS.email.copied, text: 'Copiado!' } }))
      setCopied(true)

      setTimeout(() => {
        setButtonContent(INITIAL_STATE)
        setCopied(false)
      }, 3000)
    } catch (err) {
      console.error('Failed to copy!', err)
    }
  }, [])

  const handleMouseEnter = useCallback((type: 'email' | 'cv'): void => {
    if (type === 'email' && copied) return

    setButtonContent((prev) => ({
      ...prev,
      [type]: {
        icon: ICONS[type].hover,
        text: type === 'email' ? 'Copiar' : 'Baixar'
      }
    }))
  }, [copied])

  const handleMouseLeave = useCallback((type: 'email' | 'cv'): void => {
    if (type === 'email' && copied) return

    setButtonContent((prev) => ({ ...prev, [type]: INITIAL_STATE[type] }))
  }, [copied])

  return <S.Container>
    <figure>
      <Image src={hero} alt="" />
    </figure>

    <S.InfoContainer>
      <div
        onClick={handleCopy}
        onMouseEnter={() => { handleMouseEnter('email') }}
        onMouseLeave={() => { handleMouseLeave('email') }}
      >
        {buttonContent.email.icon}

        <p>{buttonContent.email.text}</p>
      </div>

      <a
        download
        href="/Currículo-ÉCIO_FERRAZ.pdf"
        onMouseEnter={() => { handleMouseEnter('cv') }}
        onMouseLeave={() => { handleMouseLeave('cv') }}
      >
        {buttonContent.cv.icon}

        <p>{buttonContent.cv.text}</p>
      </a>
    </S.InfoContainer>
  </S.Container>
}
