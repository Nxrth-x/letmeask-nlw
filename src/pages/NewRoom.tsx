import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import useAuth from '../hooks/useAuth'
import COLORS from '../helpers/colors'

import illustationImage from '../assets/images/illustration.svg'
import logoImage from '../assets/images/logo.svg'

export default function NewRoom() {
  const { user } = useAuth()

  return (
    <Wrapper>
      <aside>
        <img
          src={illustationImage}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de {'Q&A'} ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImage} alt="Letmeask" />
          <h1>{user?.name}</h1>
          <h2>Criar uma nova sala</h2>
          <form>
            <input
              className="input"
              type="text"
              placeholder="Digite o código da sala"
            />
            <button className="btn btn-primary" type="submit">
              Criar sala
            </button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
          </p>
        </div>
      </main>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  aside {
    padding: 7.5rem 5rem;

    flex: 7;

    display: flex;
    flex-direction: column;
    justify-content: center;

    background: ${COLORS.PURPLE};

    img {
      max-width: 20rem;
    }

    strong {
      font-size: 2.25rem;
      color: ${COLORS.WHITE};
      line-height: 2.5rem;
      margin-top: 1rem;
    }

    p {
      font-size: 1.5rem;
      line-height: 2rem;
      margin-top: 1rem;
      color: ${COLORS.BACKGROUND};
    }
  }

  main {
    padding: 0 1rem;

    flex: 8;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  div.main-content {
    display: flex;
    flex-direction: column;
    align-items: stretch;

    width: 100%;
    max-width: 20rem;

    text-align: center;

    & > img {
      align-self: center;
    }

    h2 {
      margin: 4rem 0 1.5rem 0;
    }

    form {
      display: flex;
      flex-direction: column;

      button {
        margin-top: 1rem;
      }
    }

    & > p {
      font-size: 0.9rem;
      color: ${COLORS.GREY_DARK};

      margin-top: 1rem;

      a {
        color: ${COLORS.PURPLE};
      }
    }
  }
`
