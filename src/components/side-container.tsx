import React from 'react'
import styled from 'styled-components'

import IndexImage from '../assets/images/illustration.svg'
import COLORS from '../helpers/colors'

export default function SideContainer() {
  return (
    <Wrapper>
      <img src={IndexImage} alt="Letmeask" />
      <h1>
        Toda pergunta tem <br />
        uma resposta.
      </h1>
      <p>
        Aprenda e compartilhe conhecimento <br /> com outras pessoas
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 0 4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background: ${COLORS.PURPLE};
  color: ${COLORS.WHITE};

  h1 {
    font-size: 2.5rem;
    line-height: 2.5rem;
    letter-spacing: -1px;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.5rem;
    color: ${COLORS.BACKGROUND};
  }

  img {
    margin-bottom: 2rem;
    width: 24rem;
  }
`
