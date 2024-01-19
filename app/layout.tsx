import { Toaster } from "@/components/ui/sonner"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from "./components/Provider"
import './globals.css'
import { Suspense } from "react"


config.autoAddCss = false

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Login Page',
  description: 'Login Page Description',
  icons: {
    icon: './favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Suspense>
            <Providers>{children}</Providers>
            <Toaster />
          </Suspense>
        </main>
      </body>
    </html>
  )
}
