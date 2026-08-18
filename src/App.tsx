import { Routes, Route, Navigate } from "react-router-dom"

import LoginPage from "./pages/login/page"
import RegisterPage from "./pages/signup/page"
import ForgetPage from "./pages/forget/page"
import ForgeTokenPage from "./pages/forgetoken/page"

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forget" element={<ForgetPage />} />
      <Route path="/forget-token" element={<ForgeTokenPage />} />

      <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
    </Routes>
  )
}

export default App
