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

export const PageRoom = styled.div `

`

export const Header = styled.header `
  padding: 24px;
  border-bottom: 1px solid #e2e2e2;
`

export const Content = styled.div `
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`

export const ContentMain = styled.main `
  max-width: 800px;
  margin: 0 auto;
`

export const RoomTitle = styled.div `
  margin: 32px 0 24px;
  display: flex;
  align-items: center;
`

export const TitleRoomName = styled.div `
  font-family: 'Poppies', sans-serif;
  font-size: 24px;
  color: #29292e;
`

export const SpanQuestions = styled.span `
  background-color: #e559f9;
  margin-left: 16px;
  border-radius: 9999px;
  padding: 8px 16px;
  color: #fff;
  font-weight: 500;
  font-size: 14px;
`

export const Span = styled.span `
  margin-left: 16px;
  border-radius: 9999px;
  padding: 8px 16px;
  color: #fff;
  font-weight: 500;
  font-size: 14px;
`

export const FormQuestions = styled.form `

`

export const TextArea = styled.textarea `
  width: 100%;
  border: 0;
  padding: 16px;
  border-radius: 8px;
  background: #fefefe;
  box-shadow: 0 2px 12px rgba(0, 0, 0, .4);
  resize: none;
  min-height: 130px;
`

export const FormFooterContainer = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`

export const SpanSendQuestions = styled.span `
  font-size: 14px;
  color: #737380;
  font-weight: 500;
`

export const ButtonLoginGoogle = styled.button `
  background-color: transparent;
  border: 0;
  color: #835afd;
  text-decoration: underline;
  font-size: 14px;
  cursor: pointer;
`

export const UserInfo = styled.div `
  display: flex;
  align-items: center;

  span {
    margin-left: 8px;
    color: #29292e;
    font-weight: 500;
    font-size: 14px;
  }
`

export const ImageUserInfo = styled.img `
  width: 32px;
  height: 32px;
  border-radius: 50%;
`

export const ContainerImgAvatarHeader = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  img {
    width: 56px;
    height: 56px;
    cursor: pointer;
    border-radius: 50%;
  }
`

export const UserName = styled.h5 `
  color: #131313;
  font-size: 1.2rem;
`

export const QuestionList = styled.div `
  margin-top: 32px;
`

export const Container = styled.div `
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  button {
    height: 40px;
  }
`

export const Like = styled.button `
  border: 0;
  cursor: pointer;
  background-color: transparent;
  display: flex;
  align-items: flex-end;
  color: #737380;
  gap: 8px;
  transition: filter .2s;

  &.liked {
    color: #835afd;

    .icon-like-stroke {
      color: #835afd;
    }
  }

  &:hover {
    filter: brightness(.7);
  }
` 

export const SpanCounterLike = styled.span `

`

export const ButtonUser = styled.button `
  background: transparent;
  border: 0;
`

export const UserNameH1 = styled.h1 `
  display: flex;
  align-items: center;
  justify-content: flex-start;
` 