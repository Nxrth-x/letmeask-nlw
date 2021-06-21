import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import COLORS from '../helpers/colors'
import Logo from '../assets/images/logo.svg'
import IndexImage from '../assets/images/index-image.svg'
import SideContainer from '../components/side-container'

export default function CreateRoom() {
  return (
    <Wrapper>
      <SideContainer />
      <section className="form">
        <div className="wrapper">
          <img src={Logo} alt="Let me ask" />

          <h1>Criar sala</h1>
          <form className="w-full">
            <input
              className="input w-full"
              type="text"
              placeholder="Nome da sala"
            />
            <button className="btn btn-primary w-full">Criar sala</button>
            <p>
              Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
            </p>
          </form>
        </div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  section.form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      color: ${COLORS.BLACK};
    }

    div.wrapper {
      max-width: 24rem;
      width: 90%;
      display: flex;
      align-items: center;
      flex-direction: column;

      & > * {
        margin: 1rem 0;
      }

      img {
        width: 12rem;
      }

      form {
        input,
        button {
          margin-bottom: 1rem;
        }

        p a {
          color: ${COLORS.PURPLE};
        }
      }
    }
  }
`
