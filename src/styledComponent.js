import styled from 'styled-components'

export const Para = styled.p`
  font-family: 'Roboto';
  color: #223a5f;
  font-size: 23px;
`
export const Image = styled.img`
  height: 150px;
  @media (max-width: 767px) {
    height: 100px;
    padding-left: 33px;
  }
`
export const Bg = styled.div`
  background-color: #223a5f;
  display: flex;
  flex-direction: column;

  align-items: center;
  height: 100%;
  font-family: Roboto;
  padding: 12px;

  @media (max-width: 767px) {
    padding: 22px;
  }
`
