import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import COLORS from '../helpers/colors'

import illustationImage from '../assets/images/illustration.svg'
import logoImage from '../assets/images/logo.svg'
import googleIconImage from '../assets/images/google-icon.svg'
import useAuth from '../hooks/useAuth'

export default function Home() {
  const history = useHistory()
  const { user, signInWithGoogle } = useAuth()

  const redirectToNewRoom = () => history.push('rooms/new')

  const handleCreateRoom = async () => {
    if (user) {
      redirectToNewRoom()
      return
    }

    try {
      await signInWithGoogle()
      redirectToNewRoom()
    } catch {
      console.log('Erro, usuário não logado.')
    }
  }

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
          <button className="btn btn-google" onClick={handleCreateRoom}>
            <img src={googleIconImage} alt="Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input
              className="input"
              type="text"
              placeholder="Digite o código da sala"
            />
            <button className="btn btn-primary" type="submit">
              Entrar na sala
            </button>
          </form>
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

    button.btn-google {
      margin-top: 4rem;
    }

    div.separator {
      margin: 2rem 0;

      display: flex;
      align-items: center;

      font-size: 0.9rem;
      color: ${COLORS.GREY_DARK};

      &::before {
        content: '';

        margin-right: 1rem;

        flex: 1;

        height: 1px;

        background: ${COLORS.GREY_DARK};
      }

      &::after {
        content: '';

        flex: 1;

        height: 1px;

        background: ${COLORS.GREY_DARK};

        margin-left: 1rem;
      }
    }

    form {
      display: flex;
      flex-direction: column;

      button {
        margin-top: 1rem;
      }
    }
  }
`
