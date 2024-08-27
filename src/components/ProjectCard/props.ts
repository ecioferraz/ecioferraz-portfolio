import { type StaticImageData } from 'next/image'

export default interface ProjectCardProps {
  bgImg: StaticImageData
  gitHubURL: string
  projectURL?: string
  title: string
}
