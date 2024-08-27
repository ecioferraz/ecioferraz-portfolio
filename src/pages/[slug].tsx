import { type GetStaticPaths, type GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { type ReactElement } from 'react'
import Projects from './projects'
import Skills from './skills'

const pages: Record<string, ReactElement> = {
  habilidades: <Skills />,
  projetos: <Projects />
}

export default function Page (): ReactElement {
  const { query: { slug } } = useRouter()

  return pages[slug as string]
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(pages).map((key) => ({ params: { slug: key } }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  }
}
