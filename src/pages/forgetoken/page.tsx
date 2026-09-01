import tokenImage from "@/assets/images/auth_register_1.webp"
import { AuthLayout } from "@/components/auth/auth-layout"
import { ForgeTokenForm } from "@/components/token-login-form"

export default function ForgeTokenPage() {
  return (
    <AuthLayout
      imageSrc={tokenImage}
      imageAlt="Validación de token de recuperación"
    >
      <ForgeTokenForm />
    </AuthLayout>
  )
}
