import { ButtonHTMLAttributes } from 'react'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export type InputProps = {
  onChange: () => void
  type: string
  placeholder: string
  value: string
}