import type { ReactNode } from "react"

import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

type AuthLayoutProps = {
  children: ReactNode
  imageSrc?: string
  imageAlt?: string
  className?: string
}

export function AuthLayout({
  children,
  imageSrc,
  imageAlt = "",
  className,
}: AuthLayoutProps) {
  return (
    <main className="relative flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <section
        className={cn(
          "grid w-full max-w-sm overflow-hidden rounded-lg border bg-card shadow-sm md:max-w-4xl md:grid-cols-2",
          className
        )}
      >
        <div className="flex flex-col justify-center p-6 md:p-8">
          {children}
        </div>

        {imageSrc ? (
          <div className="relative hidden bg-muted md:block">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.82] dark:grayscale"
            />
          </div>
        ) : null}
      </section>
    </main>
  )
}
