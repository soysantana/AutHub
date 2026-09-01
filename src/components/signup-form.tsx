import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Eye, EyeOff, UserPlus } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function SignupForm() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError("")

    if (!email.includes("@")) {
      setError("Ingresa un correo electrónico válido.")
      return
    }

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
          <img
            src="/logo.png"
            alt="Auth Hub"
            className="h-14 w-14 rounded-lg"
          />
          <div>
            <h2 className="text-2xl font-bold">Crear cuenta</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Registra tu identidad para usar Auth Hub en tus aplicaciones.
            </p>
          </div>
        </div>

        <Field>
          <FieldLabel htmlFor="signup-email">Correo electrónico</FieldLabel>
          <Input
            id="signup-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="2022-0835@authub.com"
            autoComplete="email"
            required
          />
          <FieldDescription>
            Usaremos este correo para avisos de seguridad y recuperación.
          </FieldDescription>
        </Field>

        <Field>
          <FieldLabel htmlFor="signup-password">Contraseña</FieldLabel>
          <div className="relative">
            <Input
              id="signup-password"
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
          <FieldLabel htmlFor="confirm-password">
            Confirmar contraseña
          </FieldLabel>
          <Input
            id="confirm-password"
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
          <Button type="submit" disabled={isLoading} className="h-10">
            <UserPlus className="size-4" />
            {isLoading ? "Creando..." : "Crear cuenta"}
          </Button>
        </Field>

        <FieldDescription className="text-center">
          ¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link>
        </FieldDescription>
      </FieldGroup>
    </form>
  )
}
