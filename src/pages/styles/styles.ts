import styled from "styled-components";

export const PageAuth = styled.div `
  display: flex;
  align-items: stretch;
  height: 100vh;
`

export const Aside = styled.aside `
  flex: 7;

  background: #835afd;
  color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 120px 80px;
  align-items: center;

  img {
    width: 20vw;
    height: 40vh;
    max-width: 320px;
    border-radius: 50%
  }

  strong {
    font: 700 36px 'Poppins', sans-serif;
    line-height: 42px;
    margin-top: 16px;
  }

  p {
    font-size: 24px;
    line-height: 32px;
    margin-top: 16px;
    color: #f8f8f8;
  }
`

export const Image = styled.img `
  width: 80%;
  height: 80%;
`

export const Strong = styled.strong `

`

export const Paragraph = styled.p `

`

export const Question = styled.p `
  font-size: 14px ;
  color: #737380;
  margin-top: 16px;

  a {
    color: #e559f9;
  }
`

export const Main = styled.main `
  flex: 8;

  padding: 0 32px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const MainContent = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  align-items: stretch;
  text-align: center;
  position: relative;

  > img {
    align-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    width: 18.9vw;
    height: 38.6vh;
  }

`

export const Title = styled.h3 `
  position: absolute;
  right: 0;
  font-size: 1.2rem;
`

export const titleNewRoom = styled.h3 `
  margin-bottom: 1.1rem;
  font-size: 24px ;
  margin: 64px 0 24px;
  font-family: 'Poppins', sans-serif;
`

export const Separator = styled.div `
  font-size: 14px;
  color: #a8a8b3;

  margin: 32px 0;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    flex: 1;
    height: 1px;
    background: #a8a8b3;
    margin-right: 16px;
  }

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #a8a8b3;
    margin-left: 16px;
  }
`

export const CreateRoom = styled.button `
  margin-top: 64px;
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background-color: #ea4335;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;
  transition: filter .2s;

  .icon {
    margin-right: 8px;
  }

  &:hover {
    filter: brightness(.9);
  }
`

export const Button = styled.button `

`

export const Form = styled.form `

  input {
    height: 50px;
    border-radius: 8px;
    padding: 0 16px;
    background-color: #fff;
    border: 1px solid #a8a8b3;
  }

  button {
    margin-top: 16px;
  }

  button, input {
    width: 100%;
  }
`

export const Input = styled.input `

`