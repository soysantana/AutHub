import forgetImage from "@/assets/images/auth_forget_1.webp"
import { AuthLayout } from "@/components/auth/auth-layout"
import { ForgetForm } from "@/components/forget-login-form"

export default function ForgetPage() {
  return (
    <AuthLayout imageSrc={forgetImage} imageAlt="Recuperación segura de cuenta">
      <ForgetForm />
    </AuthLayout>
  )
}
