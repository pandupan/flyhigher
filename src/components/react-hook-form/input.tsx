import React from "react"
import { Controller, useFormContext } from "react-hook-form"
import Input from "../ui/Input"

interface InputHigherProps {
  name: string
  label?: string
}

const InputHigher = (props: InputHigherProps) => {
  const { name, label } = props

  const formHook = useFormContext()
  const { control } = formHook

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return <Input label={label} {...field} value={field.value} />
      }}
    />
  )
}

export default InputHigher
