import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Logo from '../assets/images/logo.svg'
import SideContainer from '../components/side-container'
import COLORS from '../helpers/colors'

export default function Index() {
  return (
    <Wrapper>
      <SideContainer />
      <section className="form">
        <div className="wrapper">
          <img src={Logo} alt="Let me ask" />
          <button className="btn btn-google w-full">
            Crie sua sala com o Google
          </button>
          <p className="info">
            Entre ou <Link to="/create-room">crie uma sala</Link>
          </p>
          <form className="w-full">
            <input
              className="input w-full"
              type="text"
              placeholder="Digite o código da sala"
            />
            <button className="btn btn-primary w-full">Entrar na sala</button>
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

    div.wrapper {
      max-width: 24rem;
      width: 90%;
      display: flex;
      align-items: center;
      flex-direction: column;

      a {
        color: ${COLORS.PURPLE};
      }

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
      }
    }
  }
`
