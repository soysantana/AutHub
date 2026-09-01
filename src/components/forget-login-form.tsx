import { useState } from "react"
import { Link } from "react-router-dom"
import { CheckCircle2, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function ForgetForm() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError("")

    if (!email.includes("@")) {
      setError("Ingresa un correo electrónico válido.")
      return
    }

    setIsLoading(true)
    window.setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 450)
  }

  if (isSubmitted) {
    return (
      <div className="mx-auto w-full max-w-sm text-center">
        <span className="mx-auto flex size-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <CheckCircle2 className="size-6" />
        </span>
        <h2 className="mt-5 text-2xl font-bold">Correo enviado</h2>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          Si el correo está registrado, recibirás un token para continuar la
          recuperación.
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <Button asChild className="h-10">
            <Link to="/forget-token">Ingresar token</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link to="/login">Volver al inicio</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <form className="mx-auto w-full max-w-sm" onSubmit={handleSubmit}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="flex size-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Mail className="size-5" />
          </span>
          <div>
            <h2 className="text-2xl font-bold">Recuperar contraseña</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Te enviaremos un token temporal para validar tu identidad.
            </p>
          </div>
        </div>

        <Field>
          <FieldLabel htmlFor="recovery-email">Correo electrónico</FieldLabel>
          <Input
            id="recovery-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="2022-0835@authub.com"
            autoComplete="email"
            required
          />
          <FieldDescription>
            No confirmamos si una cuenta existe para proteger tu privacidad.
          </FieldDescription>
          <FieldError>{error}</FieldError>
        </Field>

        <Field>
          <Button type="submit" disabled={isLoading} className="h-10">
            {isLoading ? "Enviando..." : "Enviar token"}
          </Button>
        </Field>

        <FieldDescription className="text-center">
          ¿Recordaste tu contraseña? <Link to="/login">Iniciar sesión</Link>
        </FieldDescription>
      </FieldGroup>
    </form>
  )
}
