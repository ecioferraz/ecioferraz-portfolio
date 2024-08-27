import { HandPeace } from '@styled-icons/fa-regular'
import { type ReactElement } from 'react'
import * as S from './styled'

export default function Info (): ReactElement {
  return <S.Container>
    <S.TitleContainer>
      <h1>Olá!</h1>

      <HandPeace />
    </S.TitleContainer>

    <p>
      Meu nome é Écio Ferraz e sou de Recife, Pernambuco.
      <br/>
      <br/>
      Sou desenvolvedor front-end e apaixonado por criar interfaces de usuário intuitivas e dinâmicas. Com uma base sólida em React, TypeScript e Styled Components, venho aprimorando minhas habilidades em desenvolvimento web, focando em entregar soluções funcionais e esteticamente agradáveis.
      <br/>
      <br/>
      Tenho experiência em projetos que variam desde páginas web, jogos interativos, até aplicações mobile completas. Sempre buscando a melhor experiência para o usuário final, estou constantemente aprendendo e me adaptando às novas tecnologias para evoluir como profissional e contribuir de forma significativa em cada projeto que faço parte.
    </p>
  </S.Container>
}
