import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Eye, EyeOff, LockKeyhole } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function ResetPasswordForm() {
  const navigate = useNavigate()
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError("")

    if (password.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres.")
      return
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.")
      return
    }

    setIsLoading(true)
    window.setTimeout(() => {
      setIsLoading(false)
      navigate("/login")
    }, 450)
  }

  return (
    <form className="mx-auto w-full max-w-sm" onSubmit={handleSubmit}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <LockKeyhole className="size-5" />
          </span>
          <div>
            <h2 className="text-2xl font-bold">Crea una nueva contraseña</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Usa una contraseña segura para recuperar el acceso a tu cuenta.
            </p>
          </div>
        </div>

        <Field>
          <FieldLabel htmlFor="new-password">Nueva contraseña</FieldLabel>
          <div className="relative">
            <Input
              id="new-password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="new-password"
              required
              minLength={8}
              className="pr-10"
            />
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              aria-label={
                showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
              }
              onClick={() => setShowPassword((current) => !current)}
              className="absolute top-1/2 right-1 -translate-y-1/2"
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </Button>
          </div>
        </Field>

        <Field>
          <FieldLabel htmlFor="confirm-new-password">
            Confirmar contraseña
          </FieldLabel>
          <Input
            id="confirm-new-password"
            type={showPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            autoComplete="new-password"
            required
            minLength={8}
          />
          <FieldDescription>
            Debe tener al menos 8 caracteres y coincidir con la anterior.
          </FieldDescription>
          <FieldError>{error}</FieldError>
        </Field>

        <Field>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Guardando..." : "Guardar contraseña"}
          </Button>
        </Field>

        <FieldDescription className="text-center">
          ¿Recordaste tu acceso? <Link to="/login">Volver al inicio</Link>
        </FieldDescription>
      </FieldGroup>
    </form>
  )
}
