import styled from 'styled-components'

export const Button = styled.button `
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background-color: #835afd;
  color: #fff;
  padding: 0 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;
  transition: filter .2s;

  .icon-enter {
    margin-right: 8px;
  }

  &:not(:disabled):hover {
    filter: brightness(.9)
  }

  &.outlined {
    background: #fff;
    border: 1px solid #835afd;
    color: #835afd;
  }

  &:disabled {
    opacity: .6;
    cursor: not-allowed;
  }
`

export const ButtonRoomCode = styled.button `
  height: 40px;
  border-radius: 8px;
  overflow: hidden;

  background-color: #fff;
  border: 1px solid #835afd;
  cursor: pointer;

  display: flex;
`

export const Container = styled.div `
  background-color: #835afd;
  padding: 0 12px ;
  display: flex;
  align-items: center;
  justify-content: center;

`

export const Span = styled.span `
  display: block;
  align-self: center;
  flex: 1;
  padding: 0 16px 0 12px;
  width: 230px;
  font-size: 14px ;
  font-weight: 500;
`

export const Question = styled.div `
  background: #fefefe;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
  padding: 24px;

  & + .question {
    margin-top: 8px; // vai colocar 8px no top apartir da segunda div
  }

  
  &.hightLighted {
    background: #f4f0ff;
    border: 1px solid #835afd;
    
    footer {
      > div span {
        color: #29292e;
      }
    }
  }

  &.answered {
    background: #dbdcdd;
    color: #737380;
  }
`

export const Paragraph = styled.p `
  color: #29292e;
`

export const UserInfo = styled.div `
  display: flex;
  align-items: center;
`

export const Footer = styled.footer `
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;

  > div {
    display: flex;
    gap: 1rem;
  }
`

export const Image = styled.img `
  width: 32px;
  height: 32px;
  border-radius: 50%;
`

export const SpanAuthorName = styled.span `
  margin-left: 8px;
  color: #737380;
  font-size: 14px;
`

export const Children = styled.div `
  
`