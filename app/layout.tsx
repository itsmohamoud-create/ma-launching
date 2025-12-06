import type { Metadata } from "next"
import "./globals.css"
import { Toaster as Sonner } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: "Ma Transform Lab",
  description: "High-converting landing page for MA Transform Lab",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Sonner position="bottom-right" />
      </body>
    </html>
  )
}
