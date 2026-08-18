import { ForgetForm } from "@/components/forget-login-form"

export default function ForgetPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-4xl">
        <ForgetForm />
      </div>
    </div>
  )
}
