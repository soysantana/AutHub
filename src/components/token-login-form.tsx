import { useNavigate } from "react-router-dom"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function ForgeTokenForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const navigate = useNavigate()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    navigate("/forget-token")
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={handleSubmit}>
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <img src="/logo.png" alt="public/" className="h-14 w-14" />
                <h1 className="text-2xl font-bold">Auth Hub</h1>
                <p className="text-balance text-muted-foreground">
                  Revisa tu correo y copia el token para continuar
                </p>
              </div>
              <Field>
                <FieldLabel htmlFor="text">Codigo</FieldLabel>
                <Input
                  id="text"
                  type="text"
                  placeholder="!0835@authub"
                  required
                />
              </Field>
              <Field>
                <Button type="submit">Restablecer Contraseña</Button>
              </Field>


              <FieldDescription className="text-center">
                Volver al Inicio <a href="/login">Inicio</a>
              </FieldDescription>
            </FieldGroup>
          </form>
          <div className="relative hidden bg-muted md:block">
     
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
