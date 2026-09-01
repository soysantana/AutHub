import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BadgeCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function ForgeTokenForm() {
  const navigate = useNavigate()
  const [token, setToken] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const normalizedToken = token.trim()
    setError("")

    if (normalizedToken.length < 6) {
      setError("Ingresa el token completo que recibiste por correo.")
      return
    }

    setIsLoading(true)
    window.setTimeout(() => {
      setIsLoading(false)
      navigate("/reset-password")
    }, 450)
  }

  return (
    <form className="mx-auto w-full max-w-sm" onSubmit={handleSubmit}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="flex size-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <BadgeCheck className="size-5" />
          </span>
          <div>
            <h2 className="text-2xl font-bold">Validar token</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Copia el código recibido para continuar con el cambio de
              contraseña.
            </p>
          </div>
        </div>

        <Field>
          <FieldLabel htmlFor="recovery-token">
            Código de recuperación
          </FieldLabel>
          <Input
            id="recovery-token"
            type="text"
            value={token}
            onChange={(event) => setToken(event.target.value)}
            placeholder="AUTH-0835"
            autoComplete="one-time-code"
            required
          />
          <FieldDescription>
            Este código es temporal. Si expiró, solicita uno nuevo.
          </FieldDescription>
          <FieldError>{error}</FieldError>
        </Field>

        <Field>
          <Button type="submit" disabled={isLoading} className="h-10">
            {isLoading ? "Validando..." : "Continuar"}
          </Button>
        </Field>

        <FieldDescription className="text-center">
          <Link to="/forget">Solicitar otro token</Link>
        </FieldDescription>
      </FieldGroup>
    </form>
  )
}
