import styled from 'styled-components'

export const Button = styled.button `
  margin-top: 64px;
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

  &:disabled {
    opacity: .6;
    cursor: not-allowed;
  }
`