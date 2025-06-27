import { useState } from 'react'

export const useForm = (initialForm) => {

  const [formState, setFormState] = useState(initialForm)

  const resetForm = () => {
    setFormState({
      username: '',
      email: '',
      password: ''
    })
  }

  const handleForm = (event) => {
    const { name, value } = event.target
    setFormState({
      ...formState,
      [name]: value
    })
  }

  return {
    formState,
    resetForm,
    handleForm
  }
}
