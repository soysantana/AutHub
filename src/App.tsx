import { Link, Navigate, Route, Routes } from "react-router-dom"

import { Button } from "@/components/ui/button"
import ForgetPage from "./pages/forget/page"
import ForgeTokenPage from "./pages/forgetoken/page"
import LoginPage from "./pages/login/page"
import ResetPasswordPage from "./pages/reset-password/page"
import RegisterPage from "./pages/signup/page"

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forget" element={<ForgetPage />} />
      <Route path="/forget-token" element={<ForgeTokenPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />

      <Route
        path="*"
        element={
          <main className="flex min-h-svh items-center justify-center bg-muted p-6">
            <section className="w-full max-w-md rounded-lg border bg-card p-8 text-center shadow-xl">
              <img
                src="/logo.png"
                alt="Auth Hub"
                className="mx-auto h-14 w-14 rounded-lg"
              />
              <h1 className="mt-6 text-2xl font-bold">Página no encontrada</h1>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                La ruta que intentas abrir no existe o fue movida.
              </p>
              <Button asChild className="mt-6">
                <Link to="/login">Volver al inicio</Link>
              </Button>
            </section>
          </main>
        }
      />
    </Routes>
  )
}

export default App
