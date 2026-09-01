import loginImage from "@/assets/images/auth_login_1.webp"
import { AuthLayout } from "@/components/auth/auth-layout"
import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <AuthLayout imageSrc={loginImage} imageAlt="Panel visual de acceso seguro">
      <LoginForm />
    </AuthLayout>
  )
}
