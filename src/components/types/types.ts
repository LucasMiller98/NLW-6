import { ButtonHTMLAttributes } from 'react'
import { ReactNode } from 'react'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean
}

export type InputProps = {
  onChange: () => void
  type: string
  placeholder: string
  value: string
}

export type QuestionProps = {
  content: string
  author: {
    name: string
    avatar: string
  }

  children?: ReactNode
  isHightLighted?: boolean
  isAnswered?: boolean
}