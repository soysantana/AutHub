import registerImage from "@/assets/images/auth_register_2.jpg"
import { AuthLayout } from "@/components/auth/auth-layout"
import { SignupForm } from "@/components/signup-form"

export default function SignupPage() {
  return (
    <AuthLayout
      imageSrc={registerImage}
      imageAlt="Persona creando una cuenta segura"
    >
      <SignupForm />
    </AuthLayout>
  )
}
