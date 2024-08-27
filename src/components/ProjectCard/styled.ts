import styled from 'styled-components'

export const ContainerBg = styled.div<{ $bgImg: string }>`
  background-image: url(${({ $bgImg }) => $bgImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
`

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;
  justify-content: center;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s linear, transform 0.6s linear;

  p {
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    white-space: pre-wrap;
  }

  p, a {
    text-shadow: 4px 4px 6px #000000;
  }
`

export const Overlay = styled.div`
  background-color: #2F2842;
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  transition: opacity 0.6s linear;
  width: 100%;
`

export const LinksContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
  justify-content: center;

  hr {
    box-shadow: 4px 4px 6px #000000;
    height: 100%;
  }

  a {
    color: #fff;
    font-size: 12px;
    font-weight: 600;
  }
`

export const Container = styled.div`
  border-radius: 20px;
  box-shadow: 4px 4px 6px 4px #00000025;
  height: 178px;
  overflow: hidden;
  position: relative;
  width: 284px;
  transition: box-shadow 0.6s linear;

  &:hover {
    box-shadow: 4px 4px 6px 4px #00000070;
  }

  &:hover ${Overlay} {
    opacity: 0.8;
  }

  &:hover ${Content} {
    opacity: 1;
    transform: translateY(0);
  }
`
