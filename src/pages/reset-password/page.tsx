import resetImage from "@/assets/images/auth_register_1.webp"
import { AuthLayout } from "@/components/auth/auth-layout"
import { ResetPasswordForm } from "@/components/reset-password-form"

export default function ResetPasswordPage() {
  return (
    <AuthLayout
      imageSrc={resetImage}
      imageAlt="Persona protegiendo el acceso de su cuenta"
    >
      <ResetPasswordForm />
    </AuthLayout>
  )
}
